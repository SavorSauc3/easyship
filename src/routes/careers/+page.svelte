<script lang="ts">
    import { Navbar, Footer } from '$lib';
    import ship3 from '$lib/images/ship3.png';

    let jobs = [
        {
            title: 'Software Engineer',
            date: '2022-01-01',
            description: 'We are looking for a talented Software Engineer to join our team.',
            skills: ['JavaScript', 'React', 'Node.js'],
            location: 'Remote'
        },
        {
            title: 'UX Designer',
            date: '2022-01-01',
            description: 'We are looking for a talented UX Designer to join our team.',
            skills: ['Figma', 'Adobe XD'],
            location: 'Remote'
        },
        {
            title: 'Product Manager',
            date: '2022-01-01',
            description: 'We are looking for a talented Product Manager to join our team.',
            skills: ['Agile', 'Scrum'],
            location: 'Remote'
        },
        {
            title: 'Sales Representative',
            date: '2022-01-01',
            description: 'We are looking for a talented Sales Representative to join our team.',
            skills: ['Sales', 'Negotiation'],
            location: 'Remote'
        }
    ]
</script>

<div class="h-screen flex flex-col justify-between">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Website Content -->
    <div class="container mx-auto p-4">
        <div class="flex flex-col justify-center items-center bg-[url('/src/lib/images/ship2.png')] bg-center bg-cover">
            <h1 class="text-4xl font-bold mb-4 text-center">Careers at EasyShip</h1>
            <p class="text-lg text-tertiary mb-8 text-center">
                We're always looking for talented individuals to join our team.
            </p>
            <p class="text-lg text-tertiary mb-8 text-center">
                If you're interested in working at EasyShip, please don't hesitate to apply.
            </p>
        </div>
        <div class="flex-col items-center job-list">
            {#each jobs as job}
                <div class="bg-surface-100-800-token p-4 rounded shadow mb-4">
                    <!-- Job Details -->
                    <div>
                        <h2 class="text-2xl text-primary font-bold mb-2">{job.title}</h2>
                        <p class="text-lg text-primary mb-2"><strong>Date:</strong> {job.date}</p>
                        <p class="text-lg text-primary mb-2">{job.description}</p>
                        <p class="text-lg text-primary mb-2"><strong>Location:</strong> {job.location}</p>
                        <p class="text-lg text-primary mb-2"><strong>Skills:</strong> {job.skills.join(', ')}</p>
                    </div>
        
                    <!-- Apply Button -->
                    <div class="flex justify-end mt-auto">
                        <a href="/career?q={job.title.toLowerCase().replace(' ', '-')}">
                            <button class="btn variant-filled rounded">Apply Now</button>
                        </a>
                    </div>
                </div>
            {/each}
        </div>

    </div>

    <!-- Footer Component -->
    <Footer />
</div>

<style>
    .job-list {
        max-height: 60vh;
        overflow-y: auto; /* Adds a vertical scrollbar if content overflows */
    }
</style>