<script lang="ts">
    import { Navbar, Footer } from '$lib';
    import { page } from '$app/state'; // Correct import for the `page` store

    // Extract the `q` query parameter
    export let title: string = '';
    $: title = new URLSearchParams(page.url.search).get('q') || ''; // Dynamically update `title` when the query changes

    // Variables to store form input values
    let firstName: string = '';
    let lastName: string = '';
    let address: string = '';
    let state: string = '';
    let zip: string = '';
    let email: string = '';
    let coverLetter: string = '';

    // Handle form submission
    function handleSubmit(event: Event) {
        event.preventDefault(); // Prevent default form submission
        console.log("Form submitted successfully!");
        console.log({
            firstName,
            lastName,
            address,
            state,
            zip,
            email,
            coverLetter
        });
    }
</script>

<!-- Application Form -->
<div class="h-screen flex flex-col justify-between">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Website Content -->
    <div class="container mx-auto p-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Application Form for {title}</h1>
        <p class="text-gray-500 mb-8">Please fill out the application form below.</p>
    </div>

    <!-- Application Form -->
    <div class="container mx-auto p-4">
        <form on:submit={handleSubmit}>
            <!-- First and Last Name -->
            <div class="flex gap-4 mb-4">
                <input class="input w-1/2" bind:value={firstName} title="First Name" type="text" placeholder="First Name" />
                <input class="input w-1/2" bind:value={lastName} title="Last Name" type="text" placeholder="Last Name" />
            </div>
    
            <!-- Address, State, ZIP -->
            <div class="flex gap-4 mb-4">
                <input class="input w-1/2" bind:value={address} title="Address" type="text" placeholder="Address" />
                <input class="input w-1/4" bind:value={state} title="State" type="text" placeholder="State" />
                <input class="input w-1/4" bind:value={zip} title="ZIP" type="text" placeholder="ZIP" />
            </div>
    
            <!-- Email -->
            <div class="mb-4">
                <input class="input w-full" bind:value={email} type="email" placeholder="Email" />
            </div>
    
            <!-- Resume Upload -->
            <div class="mb-4">
                <label for="resume" class="block font-bold text-gray-500 mb-2">Resume</label>
                <input class="input w-full" type="file" />
            </div>
    
            <!-- Cover Letter -->
            <div class="mb-4">
                <label for="cover-letter" class="block font-bold text-gray-500 mb-2">Cover Letter</label>
                <textarea class="textarea w-full" bind:value={coverLetter} rows="4" placeholder="Please enter a brief explanation of your experience, skills, and how you think you would be a good fit for this position."></textarea>
            </div>
    
            <!-- Submit Button -->
            <button type="submit" class="btn px-4 py-2 variant-ghost">Submit Application</button>
        </form>
    </div>

    <!-- Footer Component -->
    <Footer />
</div>