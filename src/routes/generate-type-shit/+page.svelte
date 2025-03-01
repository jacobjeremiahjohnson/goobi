<div>
    <h1>Goobi HQ</h1>
    <button onclick={async () => {
        const res = await fetch("/api/ai/");
        const number = await res.json();

        alert(number);
    }}>Click me!!!</button>
</div>
