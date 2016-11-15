	//https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
	//https://developer.mozilla.org/pt-BR/docs/IndexedDB/Usando_IndexedDB
	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
	window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

	if (!window.indexedDB) {
		window.alert("Seu navegador não suporta uma versão estável do IndexedDB. Alguns recursos não estarão disponíveis.");
	}
	
	
	const DB_NAME = "gameDB";
	const DB_VERSION = 1; // Use a long long for this value (don"t use a float)


	var db,
		dba;
		obj = [{}]
	
	// Abrindo o banco de dados || Let us open our database
	function openDb() {
	
		console.log("openDb ...");
		
		db = window.indexedDB.open(DB_NAME, DB_VERSION);
		db.onsuccess = function (evt) {
			dba = evt.target.result; 
			console.log("openDb DONE");

		};
		
		db.onerror = function (evt) {
			console.log("openDb: " + evt.target.errorCode);
		};
		
		
		db.onupgradeneeded = function (evt) {
			console.log("openDb.onupgradeneeded");
			dba = evt.target.result;
			
			var itensObjectStore = dba.createObjectStore("itens", {
				keyPath: "id"
			}).createIndex("Nome", "nome", {
				unique: false
			});
			
			var bagObjectStore = dba.createObjectStore("bag", {
				keyPath: "id"
			})
			
			var equipObjectStore = dba.createObjectStore("equip", {
				keyPath: "id"
			}).createIndex("Nome", "nome", {
				unique: false
			});
			
			
			
			//console.log (itensObjectStore);
			itensObjectStore.objectStore.transaction.oncomplete = function(event) {
			
			// Armazenando valores no novo objectStore.	
			
			createGItens();	
			};
		}
	
		db.onblocked = function(e){
			console.log(e)
		}

	}
	
	function storeObjects(ObjectName, Array){
		console.log(dba);
		console.log(ObjectName);
		ObjectStore = dba.transaction(ObjectName, "readwrite").objectStore(ObjectName);
				for (var i in Array) {
					ObjectStore.add(Array[i]);
				}
	}
	
	function createGItens(){
		dataItens = [
			{ id: "0000", nome: "Potion 01", params: ["liq", "liqT"], pValues: ["ffdd55","ffdd00"] },
			{ id: "0001", nome: "Potion 02", params: ["liq", "liqT"], pValues: ["bada55","bada00"] },
			{ id: "0002", nome: "Potion 03", params: ["liq", "liqT"], pValues: ["ffffff","000000"] },
			{ id: "0003", nome: "Potion 04", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0004", nome: "Potion 05", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0005", nome: "Potion 06", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0006", nome: "Potion 07", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0007", nome: "Potion 08", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0008", nome: "Potion 09", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0009", nome: "Potion 10", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0010", nome: "Potion 11", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0011", nome: "Potion 12", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0012", nome: "Potion 13", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0013", nome: "Potion 14", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0014", nome: "Potion 15", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0015", nome: "Potion 16", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0016", nome: "Potion 17", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0017", nome: "Potion 18", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0018", nome: "Potion 19", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0019", nome: "Potion 20", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0020", nome: "Potion 21", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0021", nome: "Potion 22", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0022", nome: "Potion 23", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0023", nome: "Potion 24", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0024", nome: "Potion 25", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
			{ id: "0025", nome: "Potion 26", params: ["liq", "liqT"], pValues: ["ffcc00","ffcc99"] },
		];
		storeObjects("itens",dataItens);
		fillBag ();
	}
	
	function fillBag (){
		bag = [
			{ id:"0000", qtd: 01},
			{ id:"0001", qtd: 02},
			{ id:"0002", qtd: 03},
			{ id:"0003", qtd: 04},
			{ id:"0004", qtd: 05},
			{ id:"0005", qtd: 06},
			{ id:"0006", qtd: 07},
			{ id:"0007", qtd: 08},
			{ id:"0008", qtd: 09},
			{ id:"0009", qtd: 10},
			{ id:"0010", qtd: 11},
			{ id:"0011", qtd: 12},
			{ id:"0012", qtd: 13},
			{ id:"0013", qtd: 14},
			{ id:"0014", qtd: 15},
			{ id:"0015", qtd: 16},
			{ id:"0016", qtd: 17},
			{ id:"0017", qtd: 18},
			{ id:"0018", qtd: 19},
			{ id:"0019", qtd: 20},
			{ id:"0020", qtd: 21},
			{ id:"0021", qtd: 22},
			{ id:"0022", qtd: 23},
			{ id:"0023", qtd: 24},
			{ id:"0024", qtd: 25},
			{ id:"0025", qtd: 26},
		]
		storeObjects("bag",bag);
	}

	function getItens(page){
		console.log("open cursor");
		var requestB = dba.transaction("bag");
		var objectStoreB =requestB.objectStore("bag");
		
		func = [];
		dbIds = [];
		dbQtds = [];
		
		func.push("rM=gm.rect(0,0,200,200).attr({\n\
		fill:\"#fff\",\n\
		id:\"mask\"\n\
		});\n\
		var gIt=gm.g();\n\
		gIt.attr({\n\
		id:\"gIt\",\n\
		mask:rM});\n\
		");
		
		objectStoreB.openCursor().onsuccess = function(event) {
			var cursor = event.target.result;	
			if (cursor) {
				var request = dba.transaction("itens").objectStore("itens").get(cursor.value.id);	
				request.onsuccess = function (event){
				dbIds.push(request.result);
				}
				dbQtds.push(cursor.value.qtd);
				cursor.continue();	
			}
			else {
				console.log ("fim cursor")	;
			}
		
		}
		requestB.oncomplete = function(e){
			for (var i in dbIds){
					//console.log(dbIds);
					func.push("\n var t = gm.text\(50, "+(25*+i+25)+", \""+dbIds[i].nome+"\" ).attr({\n\
		textAnchor: \"left\",\n\
		class: \"txt\",\n\
		\"font-family\":\"Calibri\",\n\
		id:\"it \"+\""+(dbIds[i].id)+"\"\n\
	}).click(function(e){\n\
		showItem(\""+dbIds[i].id+"\",[\""+dbIds[i].params.join("\",\"")+"\"],[\""+dbIds[i].pValues.join("\",\"")+"\"]);\n\
	});\n\
	var t1 = gm.text(150, "+(25*+i+25)+", \""+dbQtds[i]+"\").attr({\n\
		class: \"txt\",\n\
		\"font-family\":\"Calibri\",\n\
		id:\"qtd "+dbIds[i].id+"\"\n\
	});\n\
	g0=gm.g(t,t1).attr({\n\
		id:\"gpItns \"+"+i+"\n\
	}).mouseover(function(){\n\
	});\n\
	gIt.add(g0);\n"																
					);	
			}
			(function () {// it creates a function dynamically
				func.unshift("function shBag(){ ")
				func.push("};(function(){shBag();})()");
				
				var script = document.createElement("script");
				var code = document.createTextNode(func.join(""));
				
				script.type ="text/javascript";
				script.id = "shBag";
				script.appendChild(code);
				
				document.getElementsByTagName("head")[0].appendChild(script);
				
				if(script.complete) document.write = document._write;
				else (function() {
				// Goes to the end of the run queue so that the script 
				// is guaranteed to run before this code
				setTimeout(function(){document.write = document._write;},0);
				});	

				//	console.log(code)  ;

			})();// I will invoke myself
		}
	}
	
	function updtItem(id, i){
		
		if (i!=0){
			var objectStoreBag = dba.transaction(["bag"], "readwrite").objectStore("bag");
			var request = objectStoreBag.get(id);
			
			request.onerror = function (e){
				console.log("Error getting the item "+id);
				console.log(e);
			}
			
			
			request.onsuccess = function (e){
					var data = e.target.result;
					
					if (data ===undefined){
						var aux = [{id:id, qtd:i}];
						storeObjects("bag", [{id:id, qtd:i}], objectStoreBag);
						return;
					}
					else {
					if (i==data.qtd | i===null | i==undefined){
						console.log("igual ou nulo")
						return;
					}
					
						data.qtd = i;
				
						var requestUpdt = objectStoreBag.put(data);
							requestUpdt.onerror = function (e){
							console.log ("Error on update: "+id);
							console.log (e);
						}
					
						requestUpdt.onsuccess = function (e){
				
						}
					}
				
				}
				
		} else {
			delItem(id);
		}
	}
	
	function delItem(id){
		id = String(id);
		var request = dba.transaction("bag", "readwrite").objectStore("bag").delete(id);
		
		request.onerror = function (e){
				console.log("Error deleting item "+id);
				console.log(e);
			}
		
		request.onsuccess = function(e){
			var elem = document.getElementById("shBag");
			elem.parentNode.removeChild(elem);
			var el =document.querySelectorAll('[id^= "gpItns"]');
			console.log (el);
			for(var i in el){
				if (i=="length"){
					break;
				}
				console.log(i);
				el[i].parentNode.removeChild(el[i]);
			}
			getItens();
		}
	}
	/*function getItens(id){
		
		var request = dba.transaction(["itens"]);
		var res= request.objectStore("itens").get(id);
		aux=[{}];
		res.onerror = function(event) {
		  // Tratar erro!
		  console.log("get itens failll");
		};
		res.onsuccess = function(event) {
		  // Fazer algo com request.result!
			aux = res.result;
			setItem(aux);

			//console.log(res.result);
		// alert("O nome do "+id+" é " + request.result.nome);
		};	
		
		request.oncomplete = function(){

			setItem(aux);
		}
		return aux;
	};
	 return a;
	}
	
	function setItem(ob){
		obj = ob;
	}

	function getBag(){
	console.log("open cursor");
	var bag = [];
	
	var request = dba.transaction("bag");
	var objectStore =request.objectStore("bag");
	var aux=[{}];
		objectStore.openCursor().onsuccess = function(event) {
			var cursor = event.target.result;
			if (cursor) {
				console.log("running cursor "+cursor.value.id);
				console.log(getItens(""+cursor.value.id));
				aux = getItens(cursor.value.id);
				aux.qtd=cursor.value.qtd;
				bag.push(aux);
				cursor.continue();
			}
			else {
				//return bag;
			}
		}
		return bag;
	}*/