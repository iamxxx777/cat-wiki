import Head from "next/head"

const Meta = ({ title, description, keywords }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
        </Head>
    )
}

Meta.defaultProps = {
    title: "Catwiki - Find information on all breeds of cat",
    descriptiion: "A wikipedia of cats, by cats, for cats",
    keywords: "cats, cat breeds, feline breeds, adopt cat, catwiki, cat, wikipedia, cats wikipedia, feline pets, feline, pets"
}

export default Meta
