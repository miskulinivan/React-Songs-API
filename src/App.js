import { useState, useEffect } from 'react';

//components
import Search from './components/Search';
import Songs from './components/Songs';
import Alert from './components/Alert';

const API_KEY = `${process.env.REACT_APP_API}`;

function App() {
    const [songs, setSongs] = useState([]);
    const [query, setQuery] = useState('toto africa');
    const [alert, setAlert] = useState({
        message: '',
        showAlert: false,
        color: '',
    });
    const [finalQuery, setFinalQuery] = useState('');
    const [theme, setTheme] = useState('light-theme');

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'genius.p.rapidapi.com',
        },
    };

    useEffect(() => {
        fetch(`https://genius.p.rapidapi.com/search?q=${query}`, options)
            .then((response) => response.json())
            .then((data) => {
                try {
                    const {
                        response: { hits: songsData },
                    } = data;

                    if (songsData) {
                        setSongs(songsData);
                        setAlert({
                            message: 'Music found !',
                            showAlert: true,
                            color: 'secondary',
                        });
                    }
                    if (songsData === undefined || songsData.length === 0) {
                        setAlert({
                            message: 'Cannot be found !',
                            showAlert: true,
                            color: 'primary',
                        });
                    }
                } catch (error) {
                    console.log(error);
                }
            })

            .catch((err) => console.log(err));
    }, [finalQuery]);

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query) {
            setFinalQuery(query);
            setAlert({ message: '', showAlert: false, color: '' });
        } else {
            setAlert({
                message: 'Cannot be empty',
                showAlert: true,
                color: 'primary',
            });
        }
    };

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };
    return (
        <div className='main'>
            <Search
                query={query}
                setQuery={setQuery}
                handleSubmit={handleSubmit}
                toggleTheme={toggleTheme}
                theme={theme}
                {...alert}
                setAlert={setAlert}
            />
            {alert.showAlert && (
                <Alert {...alert} setAlert={setAlert} query={query} />
            )}
            <Songs songs={songs} />
        </div>
    );
}

export default App;
