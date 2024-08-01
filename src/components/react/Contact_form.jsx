import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useRef } from 'react';
import confetti from 'canvas-confetti';
import {SERVICE_FORM, TEMPLATE_FORM, KEY_FORM} from 'astro:env/client'

const Contact_Form = () => {
    const formRef = useRef(null);
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_FORM, TEMPLATE_FORM, formRef.current, KEY_FORM)
            .then((res) => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Thanks",
                        text: "We will contanct you soon",
                        showConfirmButton: false,
                        timer: 3000,
                    });
                    formRef.current.reset();
                    // Cambiar las imágenes
                    imageRef1.current.classList.add('hidden');
                    imageRef2.current.classList.remove('hidden');

                    // Agregar el efecto de confeti
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 }
                    });
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "We have an error at this moment. Please try again later.",
                });
            });
    }

    return (
        <div className="flex flex-row items-center justify-center w-full min-h-screen">
            <div className="w-[40%] flex items-center justify-center image-container">
                <img ref={imageRef1} className="w-5/6 default-show" src="/png/bad-01.png" alt="bad" />
                <img ref={imageRef2} className="w-5/6 hover-show hidden" src="/gif/i_yerlin2.gif" alt="happy" />
            </div>

            <form ref={formRef} className="w-[60%] px-8 py-4" onSubmit={sendEmail}>
                <div className="mb-5">
                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required name="Name" />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@email.com" required name="Email" />
                </div>
                <div className="mb-5">
                    <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                    <input type="tel" id="telefono" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="450 2011 0115" required name="Phone number" />
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" name="message"></textarea>
                </div>
                <button type="submit" className="text-white bg-[#C81010] hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-12 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEND</button>
            </form>
        </div>
    )
}

export default Contact_Form;
