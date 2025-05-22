import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Calendar } from 'lucide-react';



const ConsultationThanksDialog = ({
  open,
  onOpenChange,
  consultationData
}) => {
  if (!consultationData) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <DialogTitle className="text-center text-2xl">Consultation Scheduled!</DialogTitle>
          <DialogDescription className="text-center">
            Thank you for scheduling a consultation with TechConsult.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start space-x-4">
            <Calendar className="h-6 w-6 text-gray-500 mt-1" />
            <div className="space-y-1">
              <p className="font-medium">Consultation Details</p>
              <p className="text-sm text-gray-500">
                <strong>Name:</strong> {consultationData.name}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Email:</strong> {consultationData.email}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Date:</strong> {consultationData.date}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Time:</strong> {consultationData.time}
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-center text-gray-500">
          We've sent a confirmation email to <span className="font-medium">{consultationData.email}</span> with the details and next steps.
        </div>
        
        <DialogFooter className="flex sm:justify-center">
          <Button type="button" onClick={() => onOpenChange(false)}>
            Return to Homepage
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationThanksDialog;
