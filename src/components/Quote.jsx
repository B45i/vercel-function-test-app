import { useEffect, useState } from 'react';

const Quote = () => {
    const [quote, setQuote] = useState('');
    const styles = {
        backgroundImage: 'url(https://picsum.photos/1080/1920)',
    };

    const getData = async () => {
        const response = await fetch('/api/quotes');
        const data = await response.json();
        setQuote(data.quote);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="quotes-container">
            <div className="quote" style={styles}>
                {/* <img
                    className="quote-image"
                    src="https://picsum.photos/1080/1920"
                ></img> */}
                <div className="quote-text">{quote}</div>
            </div>
            <div className="actions">
                <button className="btn btn-blue">Download</button>
                <button className="btn btn-orange" onClick={getData}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Quote;
