import { useState, useEffect } from 'react';
import './filtercard.css';
import { useSearchParams } from 'react-router-dom';

interface FilterOptions {
    rating: number[];
    category: string[];
    other: string[];
}

export default function FilterCard() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [fltrOptions, setFltrOptions] = useState({
        rating: [],
        category: [],
        other: []
    });
    const dist = searchParams.get('dist');
    const tp = searchParams.get('tp');

    useEffect(() => {
        // Update search params whenever filter options change
        const queryParams = new URLSearchParams();
        queryParams.append('dist', dist || '');
        queryParams.append('tp', tp || '');
        
        Object.entries(fltrOptions).forEach(([category, values]) => {
            if (values.length > 0) {
                queryParams.append(category, values.join(","));
            }
        });
        setSearchParams(queryParams);
    }, [fltrOptions, dist, setSearchParams]);

    const handleInputChange = (category: keyof FilterOptions, value: any, checked: boolean) => {
        setFltrOptions(prevOptions => ({
            ...prevOptions,
            [category]: checked
                ? [...prevOptions[category], value]
                : prevOptions[category].filter(val => val !== value)
        }));
    };

    return (
        <section className="card-fltr">
            <h3 className="ttl">Шүүлтүүр</h3>
            <div className="fltrs">
                {/* Үнэлгээгээр шүүх */}
                <article>
                    <h5 className="ttl-fltr">Үнэлгээ</h5>
                    <ul className="inputs-fltr">
                        {[1, 2, 3, 4, 5].map(rating => (
                            <li className="fltr-elm" key={rating}>
                                <div>
                                    <input
                                        type="radio"
                                        name="rating"
                                        id={`star-${rating}`}
                                        value={rating}
                                        onChange={(e) => handleInputChange("rating", e.target.value, e.target.checked)}
                                    />
                                    <label htmlFor={`star-${rating}`}>{rating} одтой</label>
                                </div>
                                <span>{/* You can set the count here if needed */}</span>
                            </li>
                        ))}
                    </ul>
                </article>

                {/* Төрлөөр шүүх */}
                <article>
                    <h5 className="ttl-fltr">Төрөл</h5>
                    <ul className="inputs-fltr">
                        {['Монгол', 'Хятад', 'Солонгос', 'Европ', 'Бусад'].map(category => (
                            <li className="fltr-elm" key={category}>
                                <div>
                                    <input
                                        type="radio"
                                        name="category"
                                        value={category}
                                        onChange={(e) => setSearchParams({ tp: e.target.value })}
                                    />
                                    <label htmlFor={category}>{category}</label>
                                </div>
                                <span>{/* Count for each category */}</span>
                            </li>
                        ))}
                    </ul>
                </article>

                <article>
                    <h5 className="ttl-fltr">Бусад</h5>
                    <ul className="inputs-fltr">
                        <li className="fltr-elm">
                            <div>
                                <input
                                    type="checkbox"
                                    name="other"
                                    id="nowOpen"
                                    onChange={e => handleInputChange('other', e.target.checked, e.target.checked)}
                                />
                                <label htmlFor="nowOpen">Одоо нээлттэй</label>
                            </div>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
}
