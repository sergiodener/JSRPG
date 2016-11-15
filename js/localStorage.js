	function createWEBstorage(){//TESTS
		//localStorage.itens=;
		//db = openDatabase ('Teste','0.1','Teste da WebBD',2*1024*1024);
		var ar = "nome 1	1,nome 2	1,nome 3	1,nome 4	1,nome 5	1,nome 6	1,nome 7	1,nome 8	1,nome 9	1,nome 10	1,nome 11	1,nome 12	1,nome 13	1,nome 14	1,nome 15	1,nome 16	1,nome 17	1,nome 18	1,nome 19	1,nome 20	1,nome 21	1,nome 22	1,nome 23	1,nome 24	1,nome 25	1,nome 26	1,nome 27	1,nome 28	1,nome 29	1,nome 30	1,nome 31	1,nome 32	1,nome 33	1,nome 34	1,nome 35	1,nome 36	1,nome 37	1,nome 38	1,nome 39	1,nome 40	1";
	
		var ar2 = ar.split(/[,]/g)
		for (i = 0; i < ar2.length; i++) { 
			console.log(ar2[i]);
		}
	}

	function addItem(){
		localStorage.clear();
	/*	var itemTest ={NR:89,QTD:14,NM:'Item 89'}
		var itemTest2 ={NR:10,QTD:10, NM:'Item 10'}
		localStorage.setObject(itemTest)
		localStorage.setObject(itemTest2)*/
		//console.log(Object.getOwnPropertyNames(itemTest).sort());
	}
	function getItem(){
	
		var obj = localStorage.key(0);
		console.log(localStorage.getItem(obj))
		console.log(obj);
	}
	
	Storage.prototype.setObject = function(key, value) {
		this.setItem(key, JSON.stringify(value));
	}
		
	Storage.prototype.setObject = function(obj) {
		this.setItem(obj['NR'], JSON.stringify(obj));
	}

	Storage.prototype.getObject = function(key) {
		var value = this.getItem(key);
		return value && JSON.parse(value);
	}
	
	Storage.prototype.getObjectIdx = function(idx) {
		var key = this.key(idx);
		return localStorage.getObject(key);
		
	
	}
		/*for (i=0; i<localStorage.length;i++){
			if (i>=20){
				break;
			}
			var obj = localStorage.getObjectIdx(i);
			console.log(obj['NM']+'\t'+obj['QTD']);
			}*/