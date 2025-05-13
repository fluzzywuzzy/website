<script>
    import construction from '$lib/construction.gif';
</script>

<svelte:head>
	<title>Vincent Nord Lundström | Under construction</title>
    <style>
        body {
            width: 100%;
            min-height: 100%;
            margin: 0;
            background-color: #ef9720;
            color: #fff;            
        }

        a {
            color: #fff;
        }

        .construction-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 1em;
                text-align: center;
            }

        img {
            max-width: 100%;
        }
    </style>
</svelte:head>

<div class="construction-wrapper">
    <h1>Under construction</h1>
    <img alt="Animation of man using powertools" src={construction}/>
    <p>Want to get in touch with me? Send me an email! <a href="mailto:vnl@kth.se">vnl@kth.se</a></p>
</div>