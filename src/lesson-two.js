document.getElementById('StringButton').addEventListener('click', function () {
    // การสร้าง String
    let str1 = "Hello";
    let str2 = 'World';
    let str3 = `Hello World`;

    function displayStrings() {
        document.getElementById('StringResult').innerHTML = `
            ${str1} <br>
            ${str2} <br>
            ${str3}
        `;
    }

    // displayStrings();

    // การต่อ String
    let name = "Mat";
    let greet = "Hello " + name;
    let greet2 = `Hello ${name}!`;

    function displayStrings2() {
        document.getElementById('StringResult2').innerHTML = `
        ${greet} <br>
        ${greet2}
    `;
    }

    // displayStrings2();

    // ความยาว (length)
    let text = "Mattana";
    let length = text.length;

    function displayStrings3() {
        document.getElementById('StringResult3').innerHTML = `
            ${length}
        `;
    }

    // displayStrings3();

    // การตัดข้อความ
    let str4 = "MattanaKanlapa";

    function displayStrings4() {
        document.getElementById('StringResult4').innerHTML = `
            ${str4.slice(0, 7)} <br>
            ${str4.substring(7)}
        `;
    }

    // displayStrings4();

    // การค้นหาข้อความ
    let str5 = "I Love You";

    function displayStrings5() {
        document.getElementById('StringResult5').innerHTML = `
            ${str5.indexOf("Love")} <br>
            ${str5.lastIndexOf("Love")} <br>
            ${str5.includes("Love")} <br>
            ${str5.startsWith("I")} <br>
            ${str5.endsWith("You")} <br>
        `;
    }

    // displayStrings5();

    // การแทนที่ข้อความ
    let str6 = "I Hate You, I Hate You";

    function displayStrings6() {
        document.getElementById('StringResult6').innerHTML = `
            ${str6.replace("Hate", "Love")} <br>
            ${str6.replaceAll("Hate", "Love")}
        `;
    }

    // displayStrings6();

    // การเปลี่ยนรูปแบบตัวอักษรข้อความ
    let str7 = "lemon";
    let str8 = "MANGO"

    function displayStrings7() {
        document.getElementById('StringResult7').innerHTML = `
            ${str7.toUpperCase()} <br>
            ${str8.toLowerCase()}
        `;
    }

    // displayStrings7();

    // การลบช่องว่าง
    let str9 = "   Dragon Ball   ";

    function displayStrings8() {
        alert(`
            ${str9.trim()}
            ${str9.trimStart()}
            ${str9.trimEnd()}
        `);

        console.log(`
            ${str9.trim()}
            ${str9.trimStart()}
            ${str9.trimEnd()}
        `);

    }

    // displayStrings8();

    // การแยกข้อความ
    let str10 = "apple,banana,mango";
    let arr = str10.split(",");

    function displayStrings9() {
        console.log(arr);
    }

    // displayStrings9();

    // การซ้ำข้อความ
    let str11 = "🍎";

    function displayStrings10() {
        document.getElementById('StringResult10').innerHTML = `
            ${str11.repeat(2)}
        `;
    }

    // displayStrings10();
});

// การดึงข้อมูลวันเวลา
function displayDateInfo() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let millisecond = date.getMilliseconds();
    let time = date.getTime();
    let timeZone = date.getTimezoneOffset();

    document.getElementById('DateResult').innerHTML = `
        <div><span>ปี:</span> ${year}</div>
        <div><span>เดือน:</span> ${month + 1}</div>
        <div><span>วันที่:</span> ${day}</div>
        <div><span>ชั่วโมง:</span> ${hour}</div>
        <div><span>นาที:</span> ${minute}</div>
        <div><span>วินาที:</span> ${second}</div>
        <div><span>มิลลิวินาที:</span> ${millisecond}</div>
        <div><span>เวลา</span> ${time}</div>
        <div><span>เขตเวลา</span> ${timeZone} นาที</div>
    `;
}

// การเปลี่ยนวันเวลาเป็นข้อความ
function displayDateInfo2() {
    let date = new Date();
    let strDate = date.toString();
    let dateString = date.toDateString();
    let timeString = date.toTimeString();
    let isoString = date.toISOString();
    let localeString = date.toLocaleString();
    let localeTimeString = date.toLocaleTimeString();

    document.getElementById('DateResult2').innerHTML = `
        <div><span>วันที่ (String):</span> ${strDate}</div>
        <div><span>วันที่:</span> ${dateString}</div>
        <div><span>เวลา:</span> ${timeString}</div>
        <div><span>ISO:</span> ${isoString}</div>
        <div><span>Locale:</span> ${localeString}</div>
        <div><span>Locale Time:</span> ${localeTimeString}</div>
    `;
}