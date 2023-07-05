const pageTransition = () => {
    var tl = gsap.timeline();
    tl.fromTo(
        ".square",
        {
            "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        },
        {
            "clip-path": "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            ease: "power4.out",
            duration: 1.5,
        }
    );
    tl.to(".square", {
        "clip-path": "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        ease: "power4.out",
        duration: 1.5,
    });
};

const contentAnimation = () => {
    gsap.from(".h", { y: 50, ease: "power4.out", duration: .75 });
};

const delay = (n) => {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
};

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async();
                pageTransition();
                await delay(1500);
                done();
            },
            async enter(data) {
                contentAnimation();
            },
            async once(data) {
                contentAnimation();
            },
        },
    ],
});
