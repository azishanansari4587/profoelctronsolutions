import connection from "@/lib/connection"
import { NextResponse } from "next/server"

function calculatePercentage(current, previous) {
  if (previous === 0 && current > 0) return 100
  if (previous === 0 && current === 0) return 0
  return Number((((current - previous) / previous) * 100).toFixed(1))
}

async function safeCount(db, tableName) {
  try {
    const [[{ count }]] = await db.execute(`SELECT COUNT(*) AS count FROM ${tableName}`)
    return count
  } catch (e) {
    console.error(`❌ Error counting ${tableName}:`, e.message)
    return 0
  }
}

async function safePreviousCount(db, tableName) {
  try {
    const [[{ count }]] = await db.execute(
      `SELECT COUNT(*) AS count FROM ${tableName} WHERE created_at < DATE_SUB(NOW(), INTERVAL 1 MONTH)`
    )
    return count
  } catch (e) {
    console.warn(`⚠️ Skipping growth calc for ${tableName} (maybe no created_at):`, e.message)
    return 0
  }
}

export async function GET() {
  try {
    const db = await connection()

    // Current counts
    const projectCount = await safeCount(db, "projects")
    const subscriberCount = await safeCount(db, "subscriber")
    const teamMemberCount = await safeCount(db, "team_members")
    const contactCount = await safeCount(db, "contact")
    const consultationCount = await safeCount(db, "consultation")
    const blogCount = await safeCount(db, "blogs")

    // Previous counts
    const prevProjectCount = await safePreviousCount(db, "projects")
    const prevSubscriberCount = await safePreviousCount(db, "subscriber")
    const prevTeamMemberCount = await safePreviousCount(db, "team_members")
    const prevContactCount = await safePreviousCount(db, "contact")
    const prevConsultationCount = await safePreviousCount(db, "consultation")
    const prevBlogCount = await safePreviousCount(db, "blogs")

    return NextResponse.json({
      projectCount,
      projectGrowth: calculatePercentage(projectCount, prevProjectCount),

      subscriberCount,
      subscriberGrowth: calculatePercentage(subscriberCount, prevSubscriberCount),

      teamMemberCount,
      teamMemberGrowth: calculatePercentage(teamMemberCount, prevTeamMemberCount),

      contactCount,
      contactGrowth: calculatePercentage(contactCount, prevContactCount),

      consultationCount,
      consultationGrowth: calculatePercentage(consultationCount, prevConsultationCount),

      blogCount,
      blogGrowth: calculatePercentage(blogCount, prevBlogCount),
    })
  } catch (error) {
    console.error("🔥 /api/counts failed:", error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
