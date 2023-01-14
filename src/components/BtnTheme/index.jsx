import { changeTheme } from "../../store/slices/theme";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { useDispatch } from "react-redux";

function BtnTheme() {

    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        dispatch(changeTheme(target.value));
    };

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    const themes = [
        "acid",
        "aqua",
        "autumn",
        "black",
        "bumblebee",
        "business",
        "cmyk",
        "coffee",
        "corporate",
        "cupcake",
        "dark",
        "dracula",
        "emerald",
        "fantasy",
        "forest",
        "garden",
        "halloween",
        "lemonade",
        "lofi",
        "luxury",
        "night",
        "pastel",
        "retro",
        "synthwave",
        "valentine",
        "wireframe",
        "winter"
    ];

    return (
        <select
            data-choose-theme
            onChange={handleChange}
            className='select select-primary'
        >
            {themes.map((theme) => (
                <option key={theme} value={theme}>
                    {theme}
                </option>
            ))}
        </select>
    );
};
export default BtnTheme;