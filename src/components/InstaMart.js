import React, { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black m-2 p-2">
            <h3>{title}</h3>
            {<button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>}
            {isVisible && <h3>{description}</h3>}
        </div>
    )
}

const InstaMart = () => {
    const [instaConfig, setInstaConfig] = useState("about")

    return (
        <>
            <Section title={"About Section"}
                isVisible={instaConfig === 'about'}
                setIsVisible={(evt) => evt ? setInstaConfig("about") : setInstaConfig("")}
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."} />
            <Section title={"Team Section"}
                isVisible={instaConfig === 'team'}
                setIsVisible={(evt) => evt ? setInstaConfig("team") : setInstaConfig("")}
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."} />
            <Section title={"Career Section"}
                isVisible={instaConfig === 'career'}
                setIsVisible={(evt) => evt ? setInstaConfig("career") : setInstaConfig("")}
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."} />
        </>
    )
}

export default InstaMart