'use server';
import { signIn } from '@/auth';
import { sql } from '@vercel/postgres';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {z} from 'zod';


const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({
        invalid_type_error: 'Please select a customer.'
    }),
    amount: z.coerce.number().gt(0, {
        message: 'Please enter an amount greater than $0.'
    }),
    status: z.enum(['pending', 'paid'],{
        invalid_type_error: 'Please select an invoice status.'
    }),
    date: z.string()
});

const MovieFormSchema = z.object({
    id: z.string(),
    name: z.string({
        invalid_type_error:'Please input a movie name.'
    }),
    star: z.coerce.number().gt(0, {
        message: 'Please enter a number greater than 0.'
    }),
    douban_url: z.string({
        invalid_type_error: 'Please input a douban url.'
    }),
    image_url: z.string({
        invalid_type_error: 'Please input a image url.'
    })
})

const CreateInvoice = FormSchema.omit({id:true, date:true});
const UpdateInvoice = FormSchema.omit({id: true, date: true});


const CreateMovie = MovieFormSchema.omit({id:true})
const UpdateMovie = MovieFormSchema.omit({id:true, name:true})

export type State = {
    errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
        star?: string[];
        douban_url?: string[];
    };
    message?: string | null;
}

export type MovieState = {
    errors?: {
        star?: string[];
        douban_url?: string[];
        name?: string[];
        image_url?: string[];
    };
    message?: string | null;
}

export async function createInvoice(prevState: State, formData:FormData) {
    const validatedFields  = CreateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    });

    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.'
        }
    }

    const {customerId, amount, status} = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    try {
        await sql`
            INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
            `;
    } catch (error) {
        return {
            message: 'Databash Error: Failed to Create Invoice.'
        }
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

export async function createMovie(prevState: MovieState, formData:FormData) {
    
    console.log(formData)
    const validatedFields  = CreateMovie.safeParse({
        name: formData.get('movieName'),
        douban_url: formData.get('douban-url'),
        star: formData.get('movie-star'),
        image_url: formData.get('image-url'),
    });
    console.log(validatedFields)
    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Movie.'
        }
    }

    const {name, douban_url, star, image_url} = validatedFields.data;

    const proxy_image_url = `https://images.weserv.nl/?url=${image_url}`;

    try {
        await sql`
            INSERT INTO movies (name, douban_url, star, image_url)
            VALUES (${name}, ${douban_url}, ${star}, ${image_url})
            `;
    } catch (error) {
        return {
            message: 'Databash Error: Failed to Create Movie.'
        }
    }

    revalidatePath('/dashboard/movies');
    redirect('/dashboard/movies');
}

export async function updateInvoice( id:string, prevState: State, formData:FormData) {
    const validatedFields = UpdateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    });

    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.'
        }
    }

    const {customerId, amount, status} = validatedFields.data;
    const amountInCents = amount * 100;

    try {
        await sql`
            UPDATE invoices
            SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
            WHERE id = ${id}
        `;
    } catch (error) {
        return {
            message: 'Databash Error: Failed to Update Invoice.'
        }
    }
    

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

export async function updateMovie( id:string, prevState: MovieState, formData:FormData) {
    const validatedFields = UpdateMovie.safeParse({
        douban_url: formData.get('douban-url'),
        star: formData.get('movie-star'),
        image_url: formData.get('image-url')
    });
    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Movie.'
        }
    }

    const { douban_url, star, image_url} = validatedFields.data;

    try {
        await sql`
            UPDATE movies
            SET douban_url = ${douban_url}, star = ${star}, image_url = ${image_url}
            WHERE id = ${id}
        `;
    } catch (error) {
        return {
            message: 'Databash Error: Failed to Update Movie.'
        }
    }
    

    revalidatePath('/dashboard/movies');
    redirect('/dashboard/movies');
}

export async function deleteInvoice(id:string) {
    throw new Error('Failed to Delete Invoice')
    try {
        await sql`DELETE FROM invoices WHERE id = ${id}`;
        revalidatePath('/dashboard/invoices');
        return {message: 'Deleted Invoice.'}
    } catch (error) {
        return {
            message: 'Databash Error: Failed to Delete Invoice.'
        }
    }
    
}
export async function deleteMovie(id:string) {
    // throw new Error('Failed to Delete Movie')
    try {
        await sql`DELETE FROM movies WHERE id = ${id}`;
        revalidatePath('/dashboard/movies');
        return {message: 'Deleted movie.'}
    } catch (error) {
        return {
            message: 'Databash Error: Failed to Delete movie.'
        }
    }
    
}

export async function authenticate(prevState:string|undefined, formData:FormData) {
    try{
        await signIn('credentials', formData);
    } catch(error) {
        if (error instanceof AuthError) {
            switch(error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}