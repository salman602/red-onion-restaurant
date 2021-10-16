import { useState, useEffect } from 'react'

const useFood = () => {
    // const [foods, setFoods] = useState({});
    const [lunch, setLunch] = useState([]);
    const [breakfast, setBreakfast] = useState([]);
    const [dinner, setDinner] = useState([]);

    useEffect(() => {
        fetch('/foooods.json')
            .then(res => res.json())
            .then(data => setLunch(data?.lunch))
    }, [])

    useEffect(() => {
        fetch('/foooods.json')
            .then(res => res.json())
            .then(data => setBreakfast(data?.breakfast))
    }, [])

    useEffect(() => {
        fetch('/foooods.json')
            .then(res => res.json())
            .then(data => setDinner(data?.dinner))
    }, [])

    /* const filteredLunch = foods?.lunch?.filter(singleFood => (singleFood.type === "Lunch"))
    console.log(filteredLunch);
    setLunch(filteredLunch)
    const filteredBreakfast = foods?.breakfast?.filter(singleFood => (singleFood.type === "Breakfast"))
    console.log(filteredBreakfast)
    setBreakfast(filteredBreakfast) */
    return [lunch, breakfast, dinner]

};
export default useFood;