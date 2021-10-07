init();

function init() {
    const timelineElement = document.querySelector('.timeline');
    const timelineWrapper = timelineElement.querySelector('.timeline-wrapper');
    fillTestData(timelineWrapper);

    getAllElements(timelineWrapper).forEach(function(value) {
        if (isElementFullyVisible(timelineElement, value)) {
            return;
        }
        value.style.visibility = 'hidden';
    });

    timelineElement.addEventListener('scroll', function(e) {
        getAllElements(timelineWrapper).forEach(function(value) {
            console.log(isElementFullyVisible(timelineElement, value));
        });
    });
}

function fillTestData(timelineWrapper) {
    const testData = new Map();

    testData.set('1900', 'In the Year 1900 lorem ipsum...')
    testData.set('1910', 'In the Year 1910 lorem ipsum...')
    testData.set('1915', 'In the Year 1915 lorem ipsum...')
    testData.set('1925', 'In the Year 1925 lorem ipsum...')
    testData.set('1930', 'In the Year 1930 lorem ipsum...')
    testData.set('1945', 'In the Year 1945 lorem ipsum...')

    testData.forEach(function(value, key) {
        timelineWrapper.insertAdjacentHTML('beforeend', `
            <div class="timeline__row">
                <div class="timeline__box">
                    <div class="timeline__year">
                        ` + key + `
                    </div>
                    <div class="timeline__content">
                        ` + value + `
                    </div>
                </div>
            </div>
        `);
    });
}

function getAllElements(timeline) {
    return timeline.querySelectorAll('.timeline__row');
}

function isElementFullyVisible(timeline, timelineElement) {
    const rect = timelineElement.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    return elemTop >= 0 && elemBottom <= timeline.offsetHeight;

}