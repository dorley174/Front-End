import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import '../css/main.css'

dayjs.extend(relativeTime);

interface Comic {
    title: string;
    img: string;
    year: string;
    month: string;
    day: string;
}

const Comic: React.FC = () => {
    const [comicTitle, setComicTitle] = useState('');
    const [comicImage, setComicImage] = useState('');
    const [comicDate, setComicDate] = useState('');

    const fetchComic = async () => {
        try {
            const email = 'd.valiev@innopolis.university';

            const idResponse = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
            const id = await idResponse.text();

            const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
            const comicData: Comic = await comicResponse.json();

            setComicTitle(comicData.title);
            setComicImage(comicData.img);

            const date = new Date(parseInt(comicData.year), parseInt(comicData.month) - 1, parseInt(comicData.day));
            setComicDate(`Post date: ${dayjs(date).fromNow()} ${date.toLocaleDateString()}`);
        } catch (error) {
            console.error('Some error occured:', error);
        }
    };

    return (
        <header>
            <h1 className="nav">
                <div className="container">
                    <div className="nav-row">
                        <a href="/" className="logo nav-list__link--active">
                            Danil <strong>«Dorley» </strong> Valiev
                        </a>
                    </div>
                </div>
            </h1>
            <div className='comic__page'>
                <h2>{comicTitle}</h2>
                {comicImage && <Image src={comicImage} alt={comicTitle} width={500} height={500}/>}
                <p>{comicDate}</p>
                <button className='btn__comic' onClick={fetchComic}>Are you sure you want to see this?</button>
                <Link href="/"> <button className='btn'>Go back</button> </Link>
            
            </div>
        </header>
    );
};

export default Comic;
