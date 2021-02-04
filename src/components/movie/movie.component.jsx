import React, {useEffect, useState} from "react";
import "./movie.component.scss";
import {Card, Button, Tooltip, OverlayTrigger} from "react-bootstrap";
import {AiOutlineDelete, AiOutlineLike, AiOutlineDislike} from "react-icons/ai";
import {findImage, findRatio, findRounding} from "../../service/movieService";

const ICON_SIZE = 20;

const Movie = (props) => {
    const {movie, onDelete, onDislike, onLike} = props;
    const [srcImg, setSrcImg] = useState('');

    useEffect(() => {
        const loadImage = async () => {
            const src = await findImage(props.movie.title);
            src && setSrcImg(src);
        };
        loadImage();
    }, [props.movie]);
    return (
        <Card className="movie-card">
            <Card.Header>
                <Card.Title className={'text-center font-weight-bold'}>
                    {movie.title}
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <img
                    variant={'top'}
                    src={srcImg}
                    onError={(e) => {
                        e.target.src = '/no-image.gif';
                    }}
                    alt={movie.title}
                />
                <div className="text-primary text-right">
                    {movie.category}
                </div>
            </Card.Body>
            <Card.Footer className={'select-button-container'} bg={'dark'}>
                <div className={'d-flex'}>
                    <Button
                        variant="danger"
                        className={'rounded-circle'}
                        title="supprimer ?"
                        onClick={() => onDelete(movie.id)}
                    >
                        <AiOutlineDelete size={ICON_SIZE}/>
                    </Button>
                    <div className={'ml-auto'}>
                        <Button
                            active={movie.liked}
                            variant={"outline-primary"}
                            className={'rounded-circle mr-1'}
                            title="j'aime ce film"
                            onClick={() => onLike(movie.id)}
                        >
                            <AiOutlineLike size={ICON_SIZE}/>
                            {findRounding(movie.likes)}
                        </Button>
                        <Button
                            active={movie.disliked}
                            variant={"outline-primary"}
                            className={'rounded-circle'}
                            title="je n'aime pas ce film"
                            onClick={() => onDislike(movie.id)}
                        >
                            <AiOutlineDislike size={ICON_SIZE}/>
                            {findRounding(movie.dislikes)}
                        </Button>
                    </div>
                </div>
                <OverlayTrigger
                    placement={'bottom'}
                    overlay={
                        <Tooltip>
                            {movie.likes} / {movie.dislikes}
                        </Tooltip>
                    }
                >
                    <div className={'like-bar'}>
                        <div className={'progress'} style={{width: `${findRatio(movie.likes, movie.dislikes)}%`}}/>
                    </div>
                </OverlayTrigger>
            </Card.Footer>
        </Card>
    );
};
export default Movie;
