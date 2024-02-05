import { useEffect } from "react";}

export default function Button() {

    useEffect(() => {
        fetch("")
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);
    return (
        <button>
            Click me!
        </button>
    );
}
