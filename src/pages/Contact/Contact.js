import styles from './Contact.module.scss';
import { useForm } from 'react-hook-form';

function Contact() {

    const defaultValues = {
        name: "",
        mail: "",
        subject: "",
        text: ""
    }

    const { register, handleSubmit, getValues, formState: { errors, isSubmitting }, reset } = useForm({
        defaultValues
    });

    function submit(values) {

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function(){
            console.log(xhr.responseText);
            if(xhr.responseText === 'success') {
                alert('Email sent');
                reset(defaultValues);
            } else {
                alert('Sending error') 
            }
        }
        xhr.send(JSON.stringify(getValues()))
    }

    return (
        <div className={styles.container}>
            <div className='d-flex justify-content p-20'>
                <p className={styles.contactUsTitle}>Pour plus d'informations, contactez nous </p>
            </div>
            <form className='mt-20 d-flex flex-column justify-content' onSubmit={ handleSubmit(submit) } method="POST">
                <div className={styles.form}>
                    <input { ...register('name', {
                        minLength: {
                            value:2,
                            message: 'Merci de saisir un nom qui contient au moins 2 caractères'
                        },
                        required: {
                            value: true,
                            message: 'Champ requis'
                        }
                    })} id='name' placeholder='Nom' type="text" />
                    <div className={styles.error}>
                        { errors?.name && <p>{errors.name.message}</p> }
                    </div>
                    <input { ...register('mail', {
                        required: {
                            value: true,
                            message: 'Champ requis'
                        }
                    }) } id='mail' placeholder='Email' type="email" />
                    <div className={styles.error}>
                        { errors?.mail && <p>{errors.mail.message}</p> }
                    </div>
                    <input { ...register('subject') } type="text" placeholder='Sujet' />
                    <textarea { ...register('text', {
                        required: {
                            value: true,
                            message: 'Champ requis'
                        },
                    }) } id="message" placeholder='Message' cols="30" rows="10"></textarea>
                    <div className={styles.error}>
                        { errors?.text && <p>{errors.text.message}</p> }
                    </div>
                </div>
                <button disabled={ isSubmitting } className={`${styles.submitButton} btn btn-primary`}>Envoyer</button>
            </form>
            <div className='d-flex justify-content p-20' style={{marginTop : '100px'}}>
                <p className={styles.mapsTitle}>Où nous trouver ?</p>
            </div>
            <div className={styles.maps}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.699186003717!2d3.5444700162234235!3d50.37216340088292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2edf9482105d7%3A0xf81f743cb44bf1ec!2sP%C3%A9tanque%20Saint%20Saulvienne!5e0!3m2!1sfr!2sfr!4v1673539415849!5m2!1sfr!2sfr" width="1000" height="600" style={{ border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='maps'></iframe>
            </div>
            <div className='d-flex justify-content p-20' style={{marginTop : '100px'}}>
                <p className={styles.hoursTitle}>Horaires d'ouverture</p>
            </div>
            <div className={styles.hours}>
              <div>
                <span>Mercredi</span>
                <span>14:30 - 19:30</span>
              </div>
              <div>
                <span>Vendredi</span>
                <span>14:30 - 20:30</span>
              </div>
              <div>
                <span>Samedi</span>
                <span>14:30 - 20:30</span>
              </div>
            </div>
        </div>
    )
}

export default Contact;