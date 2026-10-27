import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

interface Customer {
  customerId: number;
  customerCode?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  dateOfBirth?: string;
  gender?: string;
  maritalStatus?: string;
  occupation?: string;
  annualIncome?: number;
  mobileNumber?: string;
  email?: string;
  customerStatus?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface CustomerPage {
  content: Customer[];
  page?: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
  first?: boolean;
  last?: boolean;
}

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers implements OnInit {
  private readonly http = inject(HttpClient);

  // Uses proxy.conf.json to reach the local Customer Service.
  private readonly apiUrl = '/api/v1/customers';

  customers: Customer[] = [];
  selectedCustomer: Customer | null = null;

  searchText = '';
  currentPage = 0;
  pageSize = 5;
  totalElements = 0;
  totalPages = 0;

  loading = false;
  detailsLoading = false;

  errorMessage = '';
  detailsError = '';

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(page = 0): void {
    this.loading = true;
    this.errorMessage = '';
    this.currentPage = page;

    let params = new HttpParams().set('page', String(page));
    const search = this.searchText.trim();

    let url = this.apiUrl;

    if (search) {
      url = `${this.apiUrl}/search`;
      params = params.set('firstName', search);
    }

    this.http.get<CustomerPage>(url, { params }).subscribe({
      next: (response: CustomerPage) => {
        console.log('Customer API response:', response);
        this.applyPage(response);
      },
      error: (error: unknown) => {
        console.error('Customer API error:', error);
        this.handleLoadError();
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  searchCustomers(): void {
    this.loadCustomers(0);
  }

  clearSearch(): void {
    this.searchText = '';
    this.loadCustomers(0);
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.loadCustomers(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.loadCustomers(this.currentPage + 1);
    }
  }

  viewCustomer(customer: Customer): void {
    this.detailsLoading = true;
    this.detailsError = '';
    this.selectedCustomer = customer;

    this.http
      .get<Customer>(`${this.apiUrl}/${customer.customerId}`)
      .subscribe({
        next: (details: Customer) => {
          this.selectedCustomer = details;
        },
        error: (error: unknown) => {
          console.error('Customer details error:', error);

          this.detailsError =
            'Could not load the latest customer details. Showing the available list information.';

          this.detailsLoading = false;
        },
        complete: () => {
          this.detailsLoading = false;
        }
      });
  }

  closeDetails(): void {
    this.selectedCustomer = null;
    this.detailsError = '';
  }

  private applyPage(response: CustomerPage): void {
    this.customers = response.content ?? [];

    // Supports the nested pagination structure returned by your API.
    this.currentPage =
      response.page?.number ?? response.number ?? 0;

    this.pageSize =
      response.page?.size ?? response.size ?? 5;

    this.totalElements =
      response.page?.totalElements ??
      response.totalElements ??
      this.customers.length;

    this.totalPages =
      response.page?.totalPages ??
      response.totalPages ??
      Math.ceil(this.totalElements / this.pageSize);

    this.loading = false;
  }

  private handleLoadError(): void {
    this.customers = [];
    this.totalElements = 0;
    this.totalPages = 0;

    this.errorMessage =
      'Unable to load customers. Check the local Customer Service and Angular proxy configuration.';

    this.loading = false;
  }

  get displayRangeStart(): number {
    return this.totalElements === 0
      ? 0
      : this.currentPage * this.pageSize + 1;
  }

  get displayRangeEnd(): number {
    return Math.min(
      (this.currentPage + 1) * this.pageSize,
      this.totalElements
    );
  }

  customerName(customer: Customer): string {
    return [
      customer.firstName,
      customer.middleName,
      customer.lastName
    ]
      .filter(Boolean)
      .join(' ') || '—';
  }

  get fullName(): string {
    if (!this.selectedCustomer) {
      return '';
    }

    return [
      this.selectedCustomer.firstName,
      this.selectedCustomer.middleName,
      this.selectedCustomer.lastName
    ]
      .filter(Boolean)
      .join(' ');
  }

  // Delete remains a UI-only placeholder.
}