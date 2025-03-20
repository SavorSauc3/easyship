<script lang="ts">
    import { Navbar, Footer } from '$lib';
    let email = '';

    function handleSubmit(event: Event) {
        event.preventDefault(); // Prevent default form submission
        console.log("Form submitted successfully!");
        console.log(email);
    }
</script>

<div class="h-screen flex flex-col justify-between">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Website Content -->
    <div class="container mx-auto p-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
        <p class="text-gray-500 mb-8">Have questions or inquiries? Reach out to us!</p>
    </div>

    <div class="container mx-auto p-4">
        <div class="grid grid-cols-3 gap-4">
            <div class="bg-surface-100-800-token p-4 rounded shadow">
                <h2 class="text-2xl font-bold mb-2">Phone</h2>
                <p class="text-lg text-primary mb-2">+1 (123) 456-7890</p>
            </div>
            <div class="bg-surface-100-800-token p-4 rounded shadow">
                <h2 class="text-2xl font-bold mb-2">Email</h2>
                <p class="text-lg text-primary mb-2">5l9oE@example.com</p>
            </div>
            <div class="bg-surface-100-800-token p-4 rounded shadow">
                <h2 class="text-2xl font-bold mb-2">Address</h2>
                <p class="text-lg text-primary mb-2">123 Main Street, Seattle WA, USA</p>
            </div>
        </div>
    </div>

    <div class="container mx-auto p-4">
        <div class="bg-surface-100-800-token p-4 rounded shadow">
            <h2 class="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <form>
                <br>
                <input type="email" placeholder="Email" class="input mb-4" bind:value={email} />
                <br>
                <button type="submit" class="btn variant-filled" on:click={handleSubmit}>Subscribe</button>
            </form>
        </div>
    </div>

    <!-- Footer Component -->
    <Footer />
</div>
