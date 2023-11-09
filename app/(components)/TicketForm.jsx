"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const TicketForm = () => {
    const router = useRouter();
    const startingTicketData = {
        title: '',
        description: '',
        priority: 1,
        progress: 0,
        status: "not started",
        category: "hardware problem",
    };

    const [formData, setFormData] = useState(startingTicketData);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;


        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='flex justify-center'>
            <form>
                <h1>Create Your Ticket</h1>

                <label>Title</label>
                <input id="title" name="title" type={"text"} onChange={handleChange} required={true} value={formData.title} />

            </form>
        </div>
    )
}

export default TicketForm;