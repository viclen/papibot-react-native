export function loremIpsum(numWords: number) {
    const words = "lorem ipsum dolor sit amet consectetur adipiscing elit proin blandit placerat tortor non placerat nunc finibus ullamcorper lectus suspendisse porta dolor mauris quis pretium velit malesuada id morbi rhoncus vestibulum dui in pharetra elit aenean lorem diam sagittis ac tortor vel blandit interdum velit praesent id dui magna cras nec finibus augue quis consectetur ligula nullam convallis nulla et sem pulvinar finibusphasellus tincidunt tellus ac risus ultricies sit amet elementum purus luctus aliquam quis metus eget odio vestibulum rutrum at ac odio cras id metus molestie vehicula elit eleifend luctus arcu suspendisse ut ipsum odio integer nec elit non lacus feugiat aliquet lorem ipsum dolor sit amet consectetur adipiscing elit cras mauris ante laoreet sit amet ullamcorper vitae faucibus vitae felis suspendisse ac sapien finibus malesuada sapien sit amet vestibulum metus interdum et malesuada fames ac ante ipsum primis in faucibus nulla consequat eu libero non porttitor morbi scelerisque quam non porttitor lobortis nam vitae auctor est nam eu arcu nisi curabitur congue et nisi sed accumsan nunc dui leo ultricies ac efficitur eget aliquet in dui maecenas eget rutrum eros in venenatis felis".split(" ");
    let text = "";
    for (let i = 0; i < numWords; i++) {
        text += words[Math.floor(Math.random() * words.length)] + " ";
    }
    text = text.substr(0, 1).toUpperCase() + text.substr(1).trim();
    return text;
}