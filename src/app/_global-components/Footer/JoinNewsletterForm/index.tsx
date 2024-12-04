'use client'
import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import s from './joinNewsletterForm.module.scss';
import { Button as PrimaryButton } from '../../PrimaryButton';
import generateToastError from '@/utils/generateToastError';

function JoinNewsletterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMssg, setErrorMssg] = useState<string | null>(null);

    const nameOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const emailOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const isBtnDisabled = useMemo(() => {
        return name === '' || email === ''
    }, [email, name])

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const baseUrl = `${process.env.NEXT_PUBLIC_fetchBaseUrl}/${process.env.NEXT_PUBLIC_fetchBasePath}`
        let urlencoded = new URLSearchParams();

        urlencoded.append('name', name);
        urlencoded.append('email', email);
        try {
            const res = await fetch(`${baseUrl}/newsletter/subscribe`, {
                method: 'POST',
                body: urlencoded
            })

            const data = await res.json();

            generateToastError(
                {},
                `${name} you've ${data.message}`,
                { type: data?.success ? 'success' : 'error' }
            )
            setName('');
            setEmail('')
        } catch (err) {
            generateToastError(err)
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <form className={s.wrapper} onSubmit={handleFormSubmit}>
            <div>
                <input
                    type="text"
                    value={name}
                    placeholder='Your first name'
                    onChange={nameOnchange}
                />
            </div>
            <div>
                <input
                    type="email"
                    value={email}
                    placeholder='Your email'
                    onChange={emailOnchange}
                />
            </div>

            <PrimaryButton isLoading={isLoading} disabled={isBtnDisabled}>
                Submit
            </PrimaryButton>
        </form>
    )
}

export default JoinNewsletterForm;