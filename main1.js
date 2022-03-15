// const all_endpoint = ['wax.greymass.com','api-wax.eosauthority.com','wax.eosphere.io',
                        //'api.wax.liquidstudios.io'];
// const all_endpoint = ['wax.greymass.com','api-wax.eosauthority.com','wax.eosphere.io'];
const all_endpoint = [
    "apiwax.3dkrender.com",
    "api-wax.eosauthority.com",
    "wax.eosn.io",
    "api.hivebp.io",
];

//fixme                         
const contract = "bxnhs.wam";

//const contract ="resourcemaxx";

const endpoint = all_endpoint[Math.floor(Math.random() * all_endpoint.length)]; //"wax.greymass.com";
const chainId = "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4";
const tbl_config = "package";
const tbl_flag = "flag";
const tbl_loan = 'accounts';

//fixme
//const node = ['bxnhs.wam'];
const node = ['max1resource', 'max2resource', 'max3resource', 'max4resource',
              'max5resource', 'maxaresource', 'maxbresource'];

const tbl_stake = 'delband';
const tbl_refunds = 'refunds';

//fixme
const dapp = "WaxCPULoan";
const tokenContract = {
    WAX: "eosio.token"
};
const pools = [{
    name: "Main pool",
    url: "/",
    contract: contract
}];



var RefundPool = null;
var menuPrices = [];

main();
async function main() {
    loggedIn = false;
    freeSpace = await GetFreeSpace();
    // GetTotalPool();
    _flag = await GetConfig(tbl_flag);
    _flag = _flag.Rows.filter(function (j) {
        return j.id === 1
    });
    if (_flag[0].flag === 1) {
        config = await GetConfig(tbl_config);
        if (config.Valid) {
            menuPrices = config.Rows;
            PopulateMenu();
            // PopulatePoolList();
            // autoLogin();
            document.getElementById("timeinput").oninput = TimeInputChanged
        }
    } else {
        document.querySelector('.login').disabled = true
        ShowToast('DAPP is under maintenance');
    }
}

function get_menu(stakewax, index, configs, configs_length, custompack, freevalue) {
    let menu = '';

    let last = index >= configs_length;
    if (last) {
        menu += '<div class="menuentry_">ENTER CUSTOM WAX FOR CPU LOAN</div>';
    }
    let j = configs[index];
    let disabled = last ? " disabled" : (freevalue < stakewax ? ' disabled' : '');

    //<div id="timeselect">Loan&nbsp;length: <input type="number" id="timeinput" name="timeinput" pattern="\d*" value="1"> <span id="timeunit">day</span></div>
    let id = last ? 'custom' : j['id'];
    let daystake = last ? '<span id="customday">0</span> days' : j.daystake + " day" + (j.daystake > 1 ? "s" : "");
    let rateper100wax = last ? '' : j.rateper100wax;
    let sp_rateper100wax = last ? '' : rateper100wax.split(' ');

    let buy_text = last ? 'Buy now<br><span id="customamount">0</span> <span id="customsymbol"></span>' : 'Buy now<br>';
    let buy = last ? '' : Number(sp_rateper100wax[0] * stakewax / 100);
    let symbol = last ? '' : sp_rateper100wax[1];
    let stakeAmount = last ? '<input type="number" id="custominput" name="custominput" pattern="d*">' : stakewax;
    // let pack = last ? custompack : 'Plan'+(index+1);
    let pack = last ? custompack : 'Plan' + id;

    let in_rate = last ? '<span id="customrate">0</span>' : Math.ceil(100 * buy / j.daystake) / 100 + '<br>' + symbol + '/day';

    let decimal = last ? '0' : CalcDecimals(j.rateper100wax);

    menu += '<div class="menuentry"><table><tr>';
    menu += '<td class="stakeamount">' + pack + " <br><br> </td>";
    menu += '<td class="stakeamount">' + stakeAmount + "<br>WAX</td>";
    menu += '<td class="timeperiod">staked for ' + daystake + "</td>";
    menu += '<td><button id="buy_' + id + '" class="buy" onclick=' + "buy(" + buy + ',' + id + ',' + decimal + ',"' + symbol + '") ' + disabled + ">" + buy_text + buy + " " + symbol + "</button></td>";
    menu += '<td class="timeperiod">' + in_rate + "</td>";
    menu += "</tr></table></div>"
    return menu;
}

function get_freevalue() {
    return Number(document.querySelector('#freevalue').innerText.split(' ')[0].replace(/,/g, ''));
}

function compare(a, b) {
    if (a.daystake < b.daystake) {
        return -1;
    }
    if (a.daystake > b.daystake) {
        return 1;
    }
    return 0;
}

function PopulateMenu() {
    menuPrices.sort(compare);
    let configs = menuPrices;

    let menu = "";

    let configs_length = configs.length;
    let freevalue = get_freevalue();

    const customday = '<select id="timeinput" class="customselect"><option></option>' + menuPrices.map((j) => {
        let sp_stake = j.rateper100wax.split(' ');
        return '<option day="' + j.daystake + '" rate="' + Number(sp_stake[0]) + '" symbol="' + sp_stake[1] + '" value="' + j.id + '" decimal="' + CalcDecimals(j.rateper100wax); + '">' + j.daystake + '</option>';
    }).join() + '</select> days';

    const custompack = '<select id="timeinput" class="customselect"><option>Plan</option>' + menuPrices.map((j, i) => {
        let sp_stake = j.rateper100wax.split(' ');
     // return '<option day="'+j.daystake+'" rate="'+Number(sp_stake[0])+'" symbol="'+sp_stake[1]+'" value="'+j.id+'" decimal="'+CalcDecimals(j.rateper100wax)+'">Plan'+(i+1)+'</option>';
        return '<option day="' + j.daystake + '" rate="' + Number(sp_stake[0]) + '" symbol="' + sp_stake[1] + '" value="' + j.id + '" decimal="' + CalcDecimals(j.rateper100wax) + '">Plan' + (j.id) + '</option>';
    }).join() + '</select>';

    let save_wax = 0;
    for (let index = 0; index <= configs_length; ++index) {
        let stakewax = 100;

        // if( index == 0 ){
        // menu += get_menu(20, index, configs, configs_length, custompack);
        // menu += get_menu(50, index, configs, configs_length, custompack);
        // }
        menu += get_menu(stakewax, index, configs, configs_length, custompack, freevalue);

    }
    document.getElementById("menu").innerHTML = menu;
    document.getElementById("custominput").oninput = CustomInputChanged

    // menu = "";
    // const menuPrices = configs.map(j=>j.daystake);
    // for(var index = 0; index <= menuPrices.length; ++index) {
    // console.log(configs[index]);
    // var symbol = GetSymbol(configs[index].rateper100wax);
    // var standard = index < menuPrices.length;
    // var stakeAmount = standard ? 100 : '<input type="number" id="custominput" name="custominput" pattern="d*">';
    // var timeMultiplier = GetTimeMultiplier();
    // var buyAmount = standard ? menuPrices[index] * timeMultiplier : '<span id="customamount"></span>';
    // var disabled = standard ? "" : " disabled";

    // var days = menuPrices[index] / 3600 / 24;
    // menu += '<div class="menuentry"><table><tr>';
    // menu += '<td class="stakeamount">' + stakeAmount + " WAX</td>";
    // menu += '<td class="timeperiod">staked for ' + days + " day" + (days > 1 ? "s" : "") + "</a>";
    // menu += '<td><button id="buy' + index + '" class="buy" onclick=' + ("buy(" + (standard ? menuPrices[index] * timeMultiplier : -1)) + ")" + disabled + ">" + ("Buy now<br>" + buyAmount + " " + symbol) + "</button></td>";
    // menu += "</tr></table></div>"
    // }
    // document.getElementById("custominput").oninput = CustomInputChanged
}

function PopulatePoolList() {
    var html = "<table><tr>";
    for (var index = 0; index < pools.length; ++index) {
        html += '<td><a href="' + pools[index].url + '">' + pools[index].name + "</a><br>" + pools[index].freeSpace + " WAX</td>"
    }
    html += "</tr></table>";
    document.getElementById("pools").innerHTML = html
}

function CustomInputChanged() {
    var mul = GetTimeMultiplier();
    var element = document.getElementById("custominput");
    element.value = parseInt(element.value);
    var check = element.value > 0;

    let freevalue = get_freevalue();
    if (element.value > freevalue) element.value = freevalue;

    if (!check || Object.keys(mul).length == 0) {
        reset_custom();

        if (Object.keys(mul).length > 0) {
            document.getElementById("customday").innerText = mul.day;
        }
        return;
    }

    var day = mul.day;
    var rate = mul.rate;
    var symbol = mul.symbol;
    var value = mul.value;
    var decimal = mul.decimal;

    var buy = element.value * rate / 100;
    buy = Math.ceil(buy * 100) / 100;
    document.querySelector('#customamount').innerText = buy;
    document.querySelector('#customsymbol').innerText = symbol;

    // document.getElementById("customamount").innerHTML = check ? timeMultiplier * element.value / config.Multiplier : "";
    document.getElementById("buy_custom").disabled = false;
    document.getElementById("buy_custom").setAttribute('onclick', 'buy(' + buy + ',' + value + ',' + decimal + ',"' + symbol + '")');
    document.getElementById("customday").innerText = day;
    document.getElementById("customrate").innerHTML = Math.ceil(100 * buy / day) / 100 + '<br>' + symbol + '/day';
}

function reset_custom() {
    document.querySelector('#buy_custom').innerHTML = 'Buy now<br><span id="customamount">0</span> <span id="customsymbol"></span>';
    document.getElementById("buy_custom").disabled = true;
    document.getElementById("customday").innerText = '0';
    document.getElementById("customrate").innerHTML = '0';
}

function TimeInputChanged() {
    CustomInputChanged();
}

function GetTimeMultiplier() {
    var selected = document.querySelector('#timeinput')
    selected = selected.options[selected.selectedIndex];

    var check = true;

    var value = selected.getAttribute('value');
    if (value == null) check = false;

    if (!check) {
        return {};
    }

    var day = selected.getAttribute('day');
    var rate = selected.getAttribute('rate');
    var symbol = selected.getAttribute('symbol');
    var decimal = selected.getAttribute('decimal');

    return {
        value: value,
        day: day,
        rate: rate,
        symbol: symbol,
        decimal: decimal
    };
}

//todo แสดง เมนู ปุ่มเช่า

function WalletListVisible(visible) {
    document.getElementById("walletlist").style.visibility = visible ? "visible" : "hidden"
}

function ShowMessage(message) {
    document.getElementById("messagecontent").innerHTML = message;
    document.getElementById("message").style.visibility = "visible"
}

function HideMessage(message) {
    document.getElementById("message").style.visibility = "hidden"
}

//todo

async function buy(amount, memo, decimal, symbol) {
    if (loggedIn) {
        HideMessage();
        try {
            const result = await wallet_transact([{
                account: tokenContract[symbol],
                name: "transfer",
                authorization: [{
                    actor: wallet_userAccount,
                    permission: "active"
                }],
                data: {
                    from: wallet_userAccount,
                    to: contract,
                    quantity: amount.toFixed(decimal) + " " + symbol,
                    memo: memo
                }
            }]);
            GetFreeSpace();
            ShowMessage('<div class="complete">Success</div><div class="link"><a href="https://wax.bloks.io/transaction/' + result.transaction_id + '?tab=traces">View transaction</a></div>')
        } catch (e) {
            console.log(e);
            ShowToast(e.message)
        }
    } else {
        WalletListVisible(true)
    }
}
async function freetrial() {
    if (loggedIn) {
        HideMessage();
        try {
            const result = await wallet_transact([{
                account: contract,
                name: "freetrial",
                authorization: [{
                    actor: wallet_userAccount,
                    permission: "active"
                }],
                data: {
                    user: wallet_userAccount
                }
            }]);
            ShowMessage('<div class="complete">Success</div><div class="link"><a href="https://wax.bloks.io/transaction/' + result.transaction_id + '?tab=traces">View transaction</a></div>')
        } catch (e) {
            ShowToast(e.message)
        }
    } else {
        WalletListVisible(true)
    }
}

function GetSymbol(quantity) {
    var spacePos = quantity.indexOf(" ");
    if (spacePos != -1) {
        return quantity.substr(spacePos + 1)
    }
    return ""
}

function CalcDecimals(quantity) {
    var dotPos = quantity.indexOf(".");
    var spacePos = quantity.indexOf(" ");
    if (dotPos != -1 && spacePos != -1) {
        return spacePos - dotPos - 1
    }
    return 0
}
async function GetTbl(_contract, tbl, _scope, _lower_bound) {
    var path = "/v1/chain/get_table_rows";
    var data = JSON.stringify({
        json: true,
        code: _contract,
        scope: _scope,
        table: tbl,
        lower_bound: _lower_bound,
        index_position: 1,
        limit: 1000
    });
    const response = await fetch("https://" + (all_endpoint[Math.floor(Math.random() * all_endpoint.length)]) + path, {
        headers: {
            "Content-Type": "text/plain"
        },
        body: data,
        method: "POST"
    });
    let body = await response.json();

    if (body.more) {
        _next = await GetTbl(_contract, tbl, _scope, body.next_key);
        if (_next.Valid) body.rows = body.rows.concat(_next.Rows);
    }
    if (body.rows && Array.isArray(body.rows) && body.rows.length > 0) {
        return {
            Valid: true,
            Rows: body.rows
        }
    } else {
        // ShowToast("Unexpected response retrieving config");
        return {
            Valid: false
        }
    }
}
async function GetConfig(tbl) {
    var path = "/v1/chain/get_table_rows";
    var data = JSON.stringify({
        json: true,
        code: contract,
        scope: contract,
        table: tbl,
        limit: 100
    });
    const response = await fetch("https://" + endpoint + path, {
        headers: {
            "Content-Type": "text/plain"
        },
        body: data,
        method: "POST"
    });
    const body = await response.json();

    if (body.rows && Array.isArray(body.rows) && body.rows.length > 0) {
        return {
            Valid: true,
            Rows: body.rows
        }
    } else {
        ShowToast("Unexpected response retrieving config");
        return {
            Valid: false
        }
    }
}
//todo  GerRefundPool
async function GetRefundPool() {
    if (RefundPool == null) {
        let _list = []
        for (i in node) {
            _list.push(await GetTbl('eosio', tbl_refunds, node[i], null));
        }
        _list = _list.filter(j => j.Valid);
        _list = _list.map(j => {
            return [j.Rows[0].cpu_amount.split(' ')[0] * 1, +new Date(j.Rows[0].request_time.replace('T', ' ') + ' UTC')]
        });
        _list = _list.sort((a, b) => {
            return a[1] - b[1];
        })
        RefundPool = _list;
        return _list;
    }

    return RefundPool;
 //todo:
    /*
    // console.log(_list);
    _refund = _list[0][0];
    _request_time = _list[0][1];
    _refund_time = _request_time + (3*24*60*60000)
    // console.log( _request_time, _refund, _refund_time)
    return [_refund_time, _refund];
    */
}
async function GetStakePool() {
    let _total = await GetTbl(contract, tbl_loan, contract, null);
    _total = _total.Rows.map(j => j.stakequantity.split(' ')[0] * 1).reduce((prev, curr) => prev + curr, 0);
    return _total;
}
async function GetTotalPool() {
    let _total = 0;
    let _stake = await GetStakePool();
    _total += _stake;
    _stake = Math.floor(parseFloat(_stake)).toLocaleString();
    document.getElementById("totalpool").innerHTML = '<br>' + _stake + " stake";

    let _refund = await GetRefundPool();
    _refund = _refund.map(j => j[0]).reduce((prev, curr) => prev + curr, 0);
    _total += _refund;
    _refund = Math.floor(parseFloat(_refund)).toLocaleString();
    document.getElementById("totalpool").innerHTML += ' | ' + _refund + " refund";

    _total += get_freevalue()
    _total = Math.floor(parseFloat(_total)).toLocaleString();
    document.getElementById("totalpool").innerHTML += ' | ' + _total + " total";
}
async function GetFreeSpace() {
    for (var index = 0; index < pools.length; ++index) {
        var path = "/v1/chain/get_table_rows";
        var data = JSON.stringify({
            json: true,
            code: "eosio.token",
            scope: pools[index].contract,
            table: "accounts",
            lower_bound: "WAX",
            upper_bound: "WAX",
            limit: 1
        });
        const response = await fetch("https://" + endpoint + path, {
            headers: {
                "Content-Type": "text/plain"
            },
            body: data,
            method: "POST"
        });
        const body = await response.json();
        if (body.rows && Array.isArray(body.rows) && body.rows.length == 1) {
            let this_wax = parseFloat(body.rows[0].balance);
            pools[index].freeSpace = Math.floor(this_wax).toLocaleString();
            if (pools[index].contract == contract) {
                document.getElementById("freevalue").innerHTML = pools[index].freeSpace + " WAX"
//todo refund wax 
                const refundwax = await GetRefundPool();
                if (this_wax < 5000) {
                    refund_wax = refundwax[0][0];
                    refund_wax = Math.floor(parseFloat(refund_wax)).toLocaleString();
                    document.getElementById("freeat").innerHTML = '<br>+' + refund_wax + ' WAX will be deposited<br>at ' + (new Date(refundwax[0][1] + (3 * 24 * 60 * 60000)).toISOString().split('.')[0].replace('T', ' ') + ' UTC');
                }

                GetTotalPool();
            }
        } else {
            ShowToast("Unexpected response retrieving balance")
        }
    }
}
async function ShowToast(message) {
    var element = document.getElementById("toast");
    element.innerHTML = message;
    toastU = 0;
    var slideFrac = .05;
    var width = element.offsetWidth;
    var right = 16;
    var id = setInterval(frame, 2e3 / 60);
    element.style.right = -width + "px";
    element.style.visibility = "visible";

    function frame() {
        toastU += .005;
        if (toastU > 1) {
            clearInterval(id);
            element.style.visibility = "hidden"
        }
        p = toastU < slideFrac ? toastU / slideFrac / 2 : 1 - toastU < slideFrac ? (1 - toastU) / slideFrac / 2 : .5;
        element.style.right = (width + right) * Math.sin(p * Math.PI) - width + "px"
    }
}
async function autoLogin() {
    var isAutoLoginAvailable = await wallet_isAutoLoginAvailable();
    if (isAutoLoginAvailable) {
        login()
    }
}
async function selectWallet(walletType) {
    wallet_selectWallet(walletType);
    login()
}
async function logout() {
    wallet_logout();
    document.getElementById("loggedin").style.display = "none";
    document.getElementById("loggedout").style.display = "block";
    loggedIn = false;
    HideMessage()
}
//Todo
async function login() {
    try {
        const userAccount = await wallet_login();
        ShowToast("Logged in as: " + userAccount );
        document.getElementById("accountname").innerHTML = userAccount + " loan from "+contract;
        document.getElementById("loggedout").style.display = "none";
        document.getElementById("loggedin").style.display = "block";
        WalletListVisible(false);
        loggedIn = true
    } catch (e) {
        document.getElementById("response").innerHTML = e.message
    }
}

const wax = new waxjs.WaxJS("https://" + endpoint, null, null, false);
const anchorTransport = new AnchorLinkBrowserTransport;
const anchorLink = new AnchorLink({
    transport: anchorTransport,
    verifyProofs: true,
    chains: [{
        chainId: chainId,
        nodeUrl: "https://" + endpoint
    }]
});
async function wallet_isAutoLoginAvailable() {
    var sessionList = await anchorLink.listSessions(dapp);
    if (sessionList && sessionList.length > 0) {
        useAnchor = true;
        return true
    } else {
        useAnchor = false;
        return await wax.isAutoLoginAvailable()
    }
}
async function wallet_selectWallet(walletType) {
    useAnchor = walletType == "anchor"
}
async function wallet_login() {
    if (useAnchor) {
        var sessionList = await anchorLink.listSessions(dapp);
        if (sessionList && sessionList.length > 0) {
            wallet_session = await anchorLink.restoreSession(dapp)
        } else {
            wallet_session = (await anchorLink.login(dapp)).session
        }
        wallet_userAccount = String(wallet_session.auth).split("@")[0]
    } else {
        wallet_userAccount = await wax.login();
        wallet_session = wax.api
    }
    return wallet_userAccount
}
async function wallet_logout() {
    if (useAnchor) {
        await anchorLink.clearSessions(dapp)
    }
}
async function wallet_transact(actions) {
    if (useAnchor) {
        var result = await wallet_session.transact({
            actions: actions
        }, {
            blocksBehind: 3,
            expireSeconds: 30
        });
        result = {
            transaction_id: result.processed.id
        }
    } else {
        var result = await wallet_session.transact({
            actions: actions
        }, {
            blocksBehind: 3,
            expireSeconds: 30
        })
    }
    return result
}