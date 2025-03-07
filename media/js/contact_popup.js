


const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-form');
const closePopup = document.getElementById('close-popup');

const forms = {
    'free-trial': `
        <h3>무료체험 신청</h3>
        <form>
            <label for="name">이름</label>
            <input type="text" id="name" name="name" required> <br>

            <label for="experience">크로스핏 경험 유무</label>
            <select id="experience" name="experience" required>
                <option value="yes">있음</option>
                <option value="no">없음</option>
            </select> <br>

            <label for="time">시간</label>
            <select id="time" name="time" required>
                <option>오전 9시</option>
                <option>오전 10시 30분</option>
                <option>오후 6시</option>
                <option>오후 7시 30분</option>
                <option>오후 9시</option>
            </select> <br>

            <label for="people">인원</label>
            <input type="number" id="people" name="people" min="1" required> <br>

            <button type="submit">신청하기</button>
        </form>
    `,
    'drop-in': `
        <h3>드랍인 문의 및 신청</h3>
        <form>
            <label for="name">이름</label>
            <input type="text" id="name" name="name" required> <br>

            <label for="people">인원</label>
            <input type="number" id="people" name="people" min="1" required> <br>

            <label for="time">시간</label>
            <select id="time" name="time" required>
                <option>오전 9시</option>
                <option>오전 10시 30분</option>
                <option>오후 6시</option>
                <option>오후 7시 30분</option>
                <option>오후 9시</option>
                <option>Open Gym</option>
            </select> <br>

            <p>두당: 20,000원</p>
            <p id="total-price">총합: 0원</p>

            <button type="submit">신청하기</button>
        </form>
    `,
    'consult': `
        <h3>상담 예약</h3>
        <form>
            <label for="name">이름</label>
            <input type="text" id="name" name="name" required> <br>

            <label for="experience">크로스핏 경험 유무</label>
            <select id="experience" name="experience" required>
                <option value="yes">있음</option>
                <option value="no">없음</option>
            </select> <br>

            <label for="visit-time">방문 시간</label>
            <input type="datetime-local" id="visit-time" name="visit-time" required> <br>

            <button type="submit">예약하기</button>
        </form>
    `
};

function openPopup(formKey) {
    popupContent.innerHTML = forms[formKey];
    popup.classList.remove('hidden');
}

function closePopupHandler() {
    popup.classList.add('hidden');
    popupContent.innerHTML = '';
}

document.getElementById('free-trial-btn').addEventListener('click', () => openPopup('free-trial'));
document.getElementById('drop-in-btn').addEventListener('click', () => openPopup('drop-in'));
document.getElementById('consult-btn').addEventListener('click', () => openPopup('consult'));
closePopup.addEventListener('click', closePopupHandler);

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopupHandler();
    }
});