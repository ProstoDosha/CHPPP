let sidePanel;
let heading;

function onScroll() {
    if (!sidePanel) {
        sidePanel = document.querySelector('.SidePanel');
    }

    if (document.documentElement.scrollTop <= heading.offsetHeight) {
        if (sidePanel.style.position === 'fixed') {
            requestAnimationFrame(() => {
                sidePanel.style.position = 'absolute';
                sidePanel.style.marginTop = `${heading.offsetHeight}px`;
            });
        }
        return;
    }

    if (sidePanel.style.position === 'fixed') {
        return;
    }

    requestAnimationFrame(() => {
        sidePanel.style.position = 'fixed';
        sidePanel.style.marginTop = 0;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    heading = document.querySelector('.heading');

    requestAnimationFrame(() => {
        sidePanel.style.position = 'absolute';
        sidePanel.style.marginTop = `${heading.offsetHeight}px`;
    });
});
document.addEventListener('scroll', onScroll)