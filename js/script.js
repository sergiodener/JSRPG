function start() {

		 //Menu Graphics
		tw = document.documentElement.clientWidth-15; // Client browser width

		//Game graphics
		gm = Snap("#game"); // Game area
		var gc = gm.rect(0, 0, document.documentElement.clientWidth-15, 500).attr({
			stroke: "#FFF",
			strokeWidth: 1,
			fill: "#000",
			id:"rect1"
		})
		
		//createSVGbuttons();/* uncomment this line to use this function */
		createCSSbuttons();
		createWEBstorage();
		
	};
	
	function createSVGbuttons(){

		document.getElementById("divmenu").innerHTML+="<svg id=\"menu\"></svg>";
		
		mn = Snap("#menu"); // Area from menu
		var c1 = mn.rect((tw/2), 0, (tw)/8, 50).attr({
				fill: "#bada55",
		})
	
		var t1 = mn.text(tw*9/16, 30, "Equipe").attr({
			textAnchor: "middle",
			class: "mntxt"
		})

	
		var c2 = mn.rect((tw*5/8), 0, (tw)/8, 50).attr({
			fill: "#004455",
		})
	
		var t2 = mn.text(tw*11/16, 30, "Itens").attr({
			textAnchor: "middle",
			class: "mntxt"
		})
	
		var c3 = mn.rect((tw*6/8), 0, (tw)/8, 50).attr({
			fill: "#676c53",
		})

		var t3 = mn.text(tw*13/16, 30, "Equipamento").attr({
			textAnchor: "middle",
			class: "mntxt"
		})
	
		var c4 = mn.rect((tw*7/8), 0, (tw)/8, 50).attr({
			fill: "#165044",
		})
	
		var t4 = mn.text(tw*15/16, 30, "Configurações").attr({
			textAnchor: "middle",
			class: "mntxt"
		})
		
		gmn = gm.rect(0, 0, document.documentElement.clientWidth-15, 500).attr({//Game MeNu on game screen
			stroke: "#FFF",
			strokeWidth: 1,
			fill: "#BAD",
			id:"rectMenu"
		})
		gmn.remove();
			
		g1=mn.g(c1,t1).click(function(){
			if(!gmn.parent()){
				gm.add(gmn)
			}
			gmn.attr({
				fill: c1,
				"fill-opacity": 1,
				id:"btGroup"
			})
		
		//	console.log(gmn.parent())
			
		});
		g2=mn.g(c2,t2).click(function(){
			if(!gmn.parent()){
				gm.add(gmn)
			}
			gmn.attr({
				fill: c2,
				"fill-opacity": 1,
				id:"btItens"
			})
			closeMenu();
			//console.log(gmn.parent())
		});
		g3=mn.g(c3,t3).click(function(){
			if(!gmn.parent()){
				gm.add(gmn)
			}
			gmn.attr({
				fill: c3,
				"fill-opacity": 1,
				id:"btEquip"
			})
			gmn.remove();
		});
		g4=mn.g(c4,t4).click(function(){
			if(!gmn.parent()){
				gm.add(gmn)
			}
			gmn.attr({
				fill: c4,
				id:"btConfg"
			})
			g5.remove();
		});
	}
	
	function createCSSbuttons(){
	document.getElementById("divmenu").innerHTML+="<button class=\"button\" id=\"btGroup\" onclick=\"showGroup()\">Equipe</button><button class=\"button\" id=\"btItens\" type=\"input\" onclick=\"itensList()\">Itens</button><button class=\"button\" id=\"btEquip\" onclick=\"equipList()\">Equipamentos</button>	<button class=\"button\" id=\"btConfg\" onclick=\"showConfg()\">Configurações</button>";
	}
	
	function createWEBstorage(){//TESTS
		//localStorage.itens="nome 1	1,nome 2	1,nome 3	1,nome 4	1,nome 5	1,nome 6	1,nome 7	1,nome 8	1,nome 9	1,nome 10	1,nome 11	1,nome 12	1,nome 13	1,nome 14	1,nome 15	1,nome 16	1,nome 17	1,nome 18	1,nome 19	1,nome 20	1,nome 21	1,nome 22	1,nome 23	1,nome 24	1,nome 25	1,nome 26	1,nome 27	1,nome 28	1,nome 29	1,nome 30	1,nome 31	1,nome 32	1,nome 33	1,nome 34	1,nome 35	1,nome 36	1,nome 37	1,nome 38	1,nome 39	1,nome 40	1,";
		//db = openDatabase ('Teste','0.1','Teste da WebBD',2*1024*1024);
	}
	
	function showGroup(){
	}
	function itensList(){
		
	}
	function equipList(){
	}
	function showConfg(){
	}
	
	function getPosition(e) {
		var posx = 0;
		var posy = 0;

		if (!e) var e = window.event;

		if (e.pageX || e.pageY) {
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) {
			posx = e.clientX + document.body.scrollLeft	+ document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}

			return {x: posx,y: posy}
	}
	
	function closeMenu(){
		btcl = gm.rect(document.documentElement.clientWidth-50,10, 25,25);
		t = gm.text(document.documentElement.clientWidth-38, 30, "X").attr({
			textAnchor: "middle",
			fill : "white"
		})
		g5=gm.g(btcl,t)
	}