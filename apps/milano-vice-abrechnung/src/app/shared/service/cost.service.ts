import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CostService {
  private readonly deliveryFee = signal(0.29);
  private readonly paymentFee = signal(0.02);
  private readonly franchiseFee = signal(0.18);
  private readonly taxRate = signal(0.19);

  calculateDeliveryCosts(costs: number): number {
    return costs * this.deliveryFee();
  }

  calculatePaymentCosts(costs: number): number {
    return costs * this.paymentFee();
  }

  calculateFranchiseCosts(costs: number): number {
    return costs * this.franchiseFee();
  }

  calculateTax(costs: number): number {
    return costs * this.taxRate();
  }

  calculateTotalCosts(costs: number): number {
    return (
      this.calculateDeliveryCosts(costs) +
      this.calculatePaymentCosts(costs) +
      this.calculateFranchiseCosts(costs)
    );
  }
}
