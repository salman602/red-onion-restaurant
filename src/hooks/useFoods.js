import { useState, useEffect } from "react";

const useFoods = () => {
    const [lunch, setLunch] = useState([]);
    const [breakfast, setBreakfast] = useState([]);
    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => setLunch(data.lunch))
    }, []);

    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => setBreakfast(data.breakfast))
    }, []);
    return [lunch, breakfast]
};

export default useFoods;