import { Component } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contact: Contact = new Contact();

  constructor(private contactService: ContactService) {}

  // Método para enviar el formulario
  onSubmit(): void {
    this.contactService.saveContact(this.contact).subscribe(
        response => {
            // Mostrar SweetAlert2 al guardar con éxito y auto-cerrar en 3 segundos
            Swal.fire({
                icon: 'success',
                title: 'Contacto guardado',
                text: 'El contacto ha sido guardado con éxito.',
                timer: 3000, // Se cierra automáticamente después de 3 segundos
                showConfirmButton: false
            });

            this.contact = new Contact(); // Resetear el formulario
        },
        error => {
            console.error('Error al guardar el contacto', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al guardar el contacto. Por favor, inténtelo de nuevo.',
                confirmButtonText: 'OK'
            });
        }
    );
}

}
