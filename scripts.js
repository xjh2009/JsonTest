async function runTest(fileName) {
            const resultText = document.getElementById('result-text');
            resultText.textContent = '加载中...';
            const jsonList = document.getElementById('json-list');
            jsonList.innerHTML = '加载中...';

            try {
                const response = await fetch(`./${fileName}.json`);
                const jsonData = await response.json();
                jsonList.innerHTML = ''; // 清空内容
                
                    const startTime = performance.now();
                    jsonData.forEach(item => {
                        const listItem = document.createElement('li');
                        listItem.textContent = `ID: ${item.id}, Name: ${item.name}, Email: ${item.email}, Age: ${item.age}, Address: ${item.address.street}, ${item.address.city}, ${item.address.zipcode}`;
                        jsonList.appendChild(listItem);
                    });
                    const endTime = performance.now();
                    const duration = (endTime - startTime)
                    resultText.textContent = `解析 ${fileName} 条Json文件 用时 ${duration.toFixed(2)} 毫秒。`;

            } catch (error) {
                jsonList.textContent = '加载或解析 JSON 数据时出错。';
                console.error('Error:', error);
            }
        }
async function runCreate(cs) {
            const resultText = document.getElementById('result-text');
            resultText.textContent = '加载中...';
            const jsonList = document.getElementById('json-list');
            jsonList.innerHTML = ''; // 清空内容
            try {

                    const startTime = performance.now();
                        const data = [];
                        for (let i = 0; i < cs; i++) {
                            data.push(generateRandomUser());
                        }

                    const jsonData = JSON.stringify(data, null, 2);
                    jsonList.innerHTML = JSON.parse(JSON.stringify(jsonData)); 

                    const endTime = performance.now();
                    const duration = (endTime - startTime); 
                    resultText.textContent = `生成 ${cs} 条Json数据 用时 ${duration.toFixed(2)} 毫秒。`;

            } catch (error) {
                resultText.textContent = '加载或解析 JSON 数据时出错。';
                console.error('Error:', error);
            }
        }
function generateRandomString(length = 10) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let randomString = '';
    for (let i = 0; i < length; i++) {
        randomString += characters[Math.floor(Math.random() * charactersLength)];
    }
    return randomString;
}

function generateRandomUser() {
    return {
        id: Math.floor(Math.random() * 1000000) + 1,
        name: generateRandomString(Math.floor(Math.random() * 6) + 5),
        email: generateRandomString(Math.floor(Math.random() * 6) + 5) + '@example.com',
        age: Math.floor(Math.random() * 63) + 18,
        address: {
            street: generateRandomString(Math.floor(Math.random() * 16) + 10),
            city: generateRandomString(Math.floor(Math.random() * 11) + 5),
            zipcode: Math.floor(Math.random() * 90000) + 10000
        }
    };
}
