import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface FormData {
  email: string;
  companyName: string;
  companyCode: string;
  address: string;
  phoneNumber: string;
  branchName: string;
  branchAddress: string;
  branchManager: string;
}

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  currentStep = 1;

  formData: FormData = {
    email: '',
    companyName: '',
    companyCode: '',
    address: '',
    phoneNumber: '',
    branchName: '',
    branchAddress: '',
    branchManager: ''
  };

  steps: Step[] = [
    {
      id: 1, title: 'Get Started', description: 'Enter your email address', icon: 'pi pi-users'
    },
    {
      id: 2, title: 'Company Details', description: 'Your organization info', icon: 'pi pi-building'
    },
    {
      id: 3, title: 'Branch Setup', description: 'Configure your branch', icon: 'pi pi-map-marker'
    }
  ];
  constructor(private router: Router) { }
  ngOnInit(): void {
    // Initialization logic if needed
  }
  getStepIconClass(step: Step): string {
    if (this.currentStep > step.id) {
      return 'pi pi-check text-green-600';
    } else {
      return step.icon + ' text-gray-700'; // e.g., 'pi pi-users'
    }
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  handleSubmit() {
    console.log('BeeHr signup completed:', this.formData);
    // Handle form submission here
  }

  onSwitchToSignin() {
    // Handle switch to signin
    this.router.navigateByUrl('/auth/loginpage');
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.formData.email.includes('@');
      case 2:
        return !!(this.formData.companyName && this.formData.companyCode &&
          this.formData.address && this.formData.phoneNumber);
      case 3:
        return !!(this.formData.branchName && this.formData.branchAddress &&
          this.formData.branchManager);
      default:
        return false;
    }
  }

  getStepClass(stepId: number): string {
    if (this.currentStep > stepId) {
      return 'bg-orange-500 border-orange-500 text-white';
    } else if (this.currentStep === stepId) {
      return 'bg-white border-orange-500 text-orange-500';
    } else {
      return 'bg-white border-gray-300 text-gray-400';
    }
  }

  getConnectorClass(stepId: number): string {
    return this.currentStep > stepId ? 'bg-orange-500' : 'bg-gray-300';
  }

}
