import React from 'react'
import Image from "../Image"
import Navbar from "../Navbar"
import images from "./images.json"

class ClickyGame extends React.Component {
    state = {
        score: 0,
        images: images
    }

    componentDidMount() {
        this.shuffle();
    }

    handleGuess(id) {
        for (image of this.state.images) {
            if (image.id === id) {
                if (!image.alreadyGuessed) {
                    this.handleCorrectGuess(id)
                } else {
                    this.reset()
                }
            }
        }
    }

    handleCorrectGuess(id) {
        for (image of this.state.images) {
            if (image.id === id) {
                image.alreadyGuessed = true;
                this.setState({ images: this.state.images })
                var score = this.state.score;
                score = score + 1;
                this.setState({ score: score });
                if (score === 12) {
                    this.handleWin();
                } else {
                    this.shuffle();
                }
            }
        }
    }

    reset() {
        this.setState({ score: 0 });
        for (image of this.state.images) {
            image.alreadyGuessed = false;
        }
        this.setState({ images: this.state.images })
        this.shuffle();
    }

    shuffle() {
        var shuffledImagesArr = [];
        var imagesCopyArr = this.state.images;
        for (i = 0; i < 12; i += 1) {
            var randomIndex = Math.floor(imagesCopyArr.length * Math.random());
            shuffledImagesArr.push(imagesCopyArr[randomIndex]);
            imagesCopyArr.splice(randomIndex, 1);
        }
        this.setState({ images: shuffledImagesArr });
    }

    render() {
        return (
            <div>
                <Navbar score={this.state.score} />
                <div className="container">
                    <div className="row">
                        {this.state.images.map(image =>
                            <Image onClick={() => this.handleGuess(image.id)} url={this.url} id={this.id} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}