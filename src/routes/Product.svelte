<script lang="ts">
    export let title: string;
    export let support: string;
    export let imgSrc: string;
    export let href: string
</script>

<a
    class="group/item flex flex-col rounded-2xl hover:rounded-3xl bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 overflow-hidden transition-all h-full"
    href={href}
>
    <div class="rounded-b-2xl h-48 w-full bg-cover bg-center object-scale-down" style="background-image: url({imgSrc})"/>
    <div class="px-6 py-6">
        <p class="text-xl font-semibold">{title}</p>
        <p>{support}</p>
    </div></a
>
