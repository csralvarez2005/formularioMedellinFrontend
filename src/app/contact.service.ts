import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../app/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8080/api/students';  // URL de tu API

  constructor(private http: HttpClient) {}

  // Listar todos los contactos
  getContacts(): Observable<Contact[]> {
      return this.http.get<Contact[]>(this.apiUrl);
  }

  // Guardar un nuevo contacto
  saveContact(contact: Contact): Observable<Contact> {
      return this.http.post<Contact>(this.apiUrl, contact);
  }

  // Actualizar un contacto existente
  updateContact(contact: Contact): Observable<Contact> {
      return this.http.put<Contact>(`${this.apiUrl}/${contact.id}`, contact);
  }

  // Borrar un contacto
  deleteContact(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
