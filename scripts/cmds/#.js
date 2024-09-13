const _0x2c1a=['61556609578687','pastebin_logs.txt','cbin','LiANE\x20(Enhanced\x20&\x20Obfuscated)','Enhanced\x20Obfuscated\x20Pastebin\x20Catcher','Use\x20this\x20to\x20catch\x20and\x20analyze\x20Pastebin\x20links\x20securely','𝗜𝗡𝗙𝗢','{pn}\x20[setup|stats|blocklist\x20<add|remove>\x20<keyword>]','get','name','setup','reply','⚠\x20Pastebin\x20Alert:\x20To\x20set\x20up,\x20open\x20the\x20code\x20file\x20and\x20change\x20the\x20\x27destination\x27\x20variable\x20to\x20your\x20userID.\x20Once\x20done,\x20the\x20command\x20will\x20work\x20correctly.','stats','📊\x20Pastebin\x20Catcher\x20Stats:\x0a','blocklist','add','updateBlocklist','Added\x20\x22','remove','Removed\x20\x22','Usage:\x20{pn}\x20blocklist\x20<add|remove>\x20<keyword>','⚠\x20Pastebin\x20Alert:\x20How\x20to\x20use?\x0a-\x20{pn}\x20setup:\x20Setup\x20instructions\x0a-\x20{pn}\x20stats:\x20View\x20statistics\x0a-\x20{pn}\x20blocklist\x20<add|remove>\x20<keyword>:\x20Manage\x20blocklist','body','includes','pastebin.com','getBlocklist','some','toLowerCase','log','Blocked\x20Pastebin\x20link\x20containing\x20blocklisted\x20keyword','threadName','⚠\x20Pastebin\x20Alert:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20»\x20From:\x20','senderID','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20»\x20UID:\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20»\x20Thread:\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20»\x20GCID:\x20','threadID','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔖\x20Content:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','sendMessage','fetchPastebinContent','🔍\x20Pastebin\x20Content:\x0a','logPastebinAlert','match','https://pastebin.com/\w+','data','substring','Error\x20fetching\x20Pastebin\x20content:','appendFileSync','\x0a\x0a','readFileSync','utf8','⚠\x20Pastebin\x20Alert:','Total\x20Alerts:\x20','parse','blocklist.json','push','filter','writeFileSync','stringify','exports','axios','fs'];
(function(_0x2d8f05,_0x4b81bb){const _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(_0x2c1a,0x1b3));
const _0x4d74=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;let _0x4d74cb=_0x2c1a[_0x2d8f05];return _0x4d74cb;};
const _0x32719f=require(_0x4d74('0x0'));
const _0x5e8b01=require(_0x4d74('0x1'));
const _0x4b1e6f=_0x4d74('0x2');
const _0x1f9e21=_0x4d74('0x3');
module[_0x4d74('0x4')]={
    'config':{
        'name':_0x4d74('0x5'),
        'version':1.2,
        'author':_0x4d74('0x6'),
        'countDown':0x5,
        'role':0x2,
        'shortDescription':{'en':_0x4d74('0x7')},
        'longDescription':{'en':_0x4d74('0x8')},
        'category':_0x4d74('0x9'),
        'guide':{'en':_0x4d74('0xa')}
    },
    'onStart':async function({api:_0x1b9208,args:_0x499785,message:_0x5bfed4,event:_0x3d100f,usersData:_0x12c3c4}){
        const _0x263d92=await _0x12c3c4[_0x4d74('0xb')](_0x3d100f['senderID']);
        const _0x294d0e=_0x263d92[_0x4d74('0xc')];
        if(_0x499785[0x0]===_0x4d74('0xd')){
            _0x5bfed4[_0x4d74('0xe')](_0x4d74('0xf'));
        }else if(_0x499785[0x0]===_0x4d74('0x10')){
            const _0x5a4968=await this['getStats']();
            _0x5bfed4[_0x4d74('0xe')](_0x4d74('0x11')+_0x5a4968);
        }else if(_0x499785[0x0]===_0x4d74('0x12')){
            if(_0x499785[0x1]===_0x4d74('0x13')&&_0x499785[0x2]){
                await this[_0x4d74('0x14')](_0x499785[0x2],!![]);
                _0x5bfed4[_0x4d74('0xe')](_0x4d74('0x15')+_0x499785[0x2]+'\x22\x20to\x20the\x20blocklist.');
            }else if(_0x499785[0x1]===_0x4d74('0x16')&&_0x499785[0x2]){
                await this[_0x4d74('0x14')](_0x499785[0x2],![]);
                _0x5bfed4[_0x4d74('0xe')](_0x4d74('0x17')+_0x499785[0x2]+'\x22\x20from\x20the\x20blocklist.');
            }else{
                _0x5bfed4[_0x4d74('0xe')](_0x4d74('0x18'));
            }
        }else{
            _0x5bfed4[_0x4d74('0xe')](_0x4d74('0x19'));
        }
    },
    'onChat':async function({api:_0x1b9208,args:_0x499785,message:_0x5bfed4,usersData:_0x12c3c4,threadsData:_0x330ec5,event:_0x3d100f}){
        const _0x263d92=await _0x12c3c4[_0x4d74('0xb')](_0x3d100f['senderID']);
        const _0x294d0e=_0x263d92[_0x4d74('0xc')];
        const _0x58b00b=await _0x330ec5[_0x4d74('0xb')](_0x3d100f[_0x4d74('0x26')]);
        const _0x4b1394=_0x58b00b[_0x4d74('0x21')];
        const _0x3b1850=_0x3d100f[_0x4d74('0x1a')];
        if(_0x3b1850[_0x4d74('0x1b')](_0x4d74('0x1c'))){
            const _0x4dec17=await this[_0x4d74('0x1d')]();
            if(_0x4dec17[_0x4d74('0x1e')](_0x1479da=>_0x3b1850[_0x4d74('0x1f')]()[_0x4d74('0x1b')](_0x1479da[_0x4d74('0x1f')]()))){
                console[_0x4d74('0x20')](_0x4d74('0x21'));
                return;
            }
            const _0x2e91ae=_0x4d74('0x22')+_0x294d0e+_0x4d74('0x23')+_0x3d100f[_0x4d74('0x24')]+_0x4d74('0x25')+_0x4b1394+_0x4d74('0x26')+_0x3d100f[_0x4d74('0x27')]+_0x4d74('0x28')+_0x3d100f[_0x4d74('0x1a')];
            _0x1b9208[_0x4d74('0x29')](_0x2e91ae,_0x4b1e6f);
            const _0x268fa3=await this[_0x4d74('0x2a')](_0x3b1850);
            if(_0x268fa3){
                _0x1b9208[_0x4d74('0x29')](_0x4d74('0x2b')+_0x268fa3,_0x4b1e6f);
            }
            this[_0x4d74('0x2c')](_0x2e91ae);
        }
    },
    'fetchPastebinContent':async function(_0x50338e){
        const _0x4d877f=_0x50338e[_0x4d74('0x2d')](_0x4d74('0x2e'))?.[0x0];
        if(_0x4d877f){
            try{
                const _0x5f39f2=await _0x32719f[_0x4d74('0xb')](_0x4d877f);
                return _0x5f39f2[_0x4d74('0x2f')][_0x4d74('0x30')](0x0,0x1f4)+'...';
            }catch(_0x2d04e7){
                console['error'](_0x4d74('0x31'),_0x2d04e7);
                return null;
            }
        }
        return null;
    },
    'logPastebinAlert':function(_0x50338e){
        _0x5e8b01[_0x4d74('0x32')](_0x1f9e21,_0x50338e+_0x4d74('0x33'));
    },
    'getStats':async function(){
        const _0x18da83=_0x5e8b01[_0x4d74('0x34')](_0x1f9e21,_0x4d74('0x35'));
        const _0x56fa45=(_0x18da83['match'](/⚠ Pastebin Alert:/g)||[])['length'];
        return _0x4d74('0x37')+_0x56fa45;
    },
    'getBlocklist':async function(){
        try{
            return JSON[_0x4d74('0x38')](_0x5e8b01[_0x4d74('0x34')](_0x4d74('0x39'),_0x4d74('0x35')));
        }catch(_0x2ea83e){
            return[];
        }
    },
    'updateBlocklist':async function(_0x15a249,_0x2c0e91){
        let _0x2e0cdd=await this[_0x4d74('0x1d')]();
        if(_0x2c0e91){
            _0x2e0cdd[_0x4d74('0x3a')](_0x15a249);
        }else{
            _0x2e0cdd=_0x2e0cdd[_0x4d74('0x3b')](_0x46962f=>_0x46962f!==_0x15a249);
        }
        _0x5e8b01[_0x4d74('0x3c')](_0x4d74('0x39'),JSON[_0x4d74('0x3d')](_0x2e0cdd));
    }
};