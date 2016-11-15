function start() {
		

		//Menu Graphics
		createCSSbuttons();
	//	createSVGbuttons();/* uncomment this line to use this function */

		//Game graphics
		gm = Snap("#game"); // Game area
		var gc = gm.rect(0, 0, document.documentElement.clientWidth-15, 500).attr({
			stroke: "#FFF",
			strokeWidth: 1,
			fill: "#000",
			id:"rectGame"
		})
		
		//Game Database
		openDb();
		
	};
	
	function createSVGbuttons(){
		var tw = document.documentElement.clientWidth-15; // Client browser width
		document.getElementById("divmenu").innerHTML+="<svg id=\"menu\"></svg>";
		
		mn = Snap("#menu"); // Area from menu
		var c1 = mn.rect((tw/2), 0, (tw)/8, 50).attr({
				fill: "#bada55",
				id: "btGroup"
		})
	
		var t1 = mn.text(tw*9/16, 30, "Equipe").attr({
			textAnchor: "middle",
			class: "mntxt"
		})

	
		var c2 = mn.rect((tw*5/8), 0, (tw)/8, 50).attr({
			fill: "#004455",
			id: "btItens"
		})
	
		var t2 = mn.text(tw*11/16, 30, "Itens").attr({
			textAnchor: "middle",
			class: "mntxt"
		})
	
		var c3 = mn.rect((tw*6/8), 0, (tw)/8, 50).attr({
			fill: "#676c53",
			id: "btEquip"
		})

		var t3 = mn.text(tw*13/16, 30, "Equipamento").attr({
			textAnchor: "middle",
			class: "mntxt"
		})
	
		var c4 = mn.rect((tw*7/8), 0, (tw)/8, 50).attr({
			fill: "#165044",
			id: "btConfg"
		})
	
		var t4 = mn.text(tw*15/16, 30, "Configurações").attr({
			textAnchor: "middle",
			class: "mntxt"
		})
		/*
		gmn = gm.rect(0, 0, document.documentElement.clientWidth-15, 500).attr({//Game Menu on game screen
			stroke: "#FFF",
			strokeWidth: 1,
			fill: "#BAD",
			id:"rectMenu"
		})
		gmn.remove();*/
			
		g1=mn.g(c1,t1).attr({
			id:"gpGrp"
		}).click(function(){
			menu("Grp");		
		});
		g2=mn.g(c2,t2).attr({
			id:"gpItm"
		}).click(function(){
			menu("Itm");
			//console.log(gmn.parent())
		});
		g3=mn.g(c3,t3).attr({
			id:"gpEqp"
		}).click(function(){
			menu("Eqp");
			//gmn.remove();
		});
		g4=mn.g(c4,t4).attr({
			id:"gpCfg"
		}).click(function(){
			menu("Cfg");
		});
	}
	
	function closeMenu(){
		btcl = gm.rect(document.documentElement.clientWidth-50,10, 25,25);
		t = gm.text(document.documentElement.clientWidth-38, 30, "X").attr({
			textAnchor: "middle",
			fill : "white"
		})
		g5=gm.g(btcl,t)
	}
	
	function createCSSbuttons(){
	document.getElementById("divmenu").innerHTML+="<button class=\"button\" id=\"btGroup\" onclick=\"menu('Grp')\">Equipe</button><button class=\"button\" id=\"btItens\" type=\"input\" onclick=\"menu('Itm')\">Itens</button><button class=\"button\" id=\"btEquip\" onclick=\"menu('Eqp')\">Equipamentos</button>	<button class=\"button\" id=\"btConfg\" onclick=\"menu('Cfg')\">Configurações</button>";
	}
	

	function menu(m){
		if(typeof gmn === 'undefined' || gmn === null){
			gmn = gm.rect(5, 5, document.getElementById("rectGame").getAttribute("width")-10, document.getElementById("rectGame").getAttribute("height")-10).attr({//Game Menu on game screen
				stroke: "#ffdd99",
				strokeWidth: 2,
				fill: "#ffcc66",
				id:"rectMenu"
			})
		}
		switch (m){
		case "Grp":
			console.log("OK Grp");
			testAnimation();
			//testTransform();
		rectM=gm.rect(55,55, 40, 40).attr({
				id:"mask0",
				fill:"#fff"
			});
			
			rectT=gm.rect(50,50, 50, 50).attr({
				stroke: "#ffffff",
				strokeWidth: 2,
				fill: "#bada55",
				id:"rect",
				mask: rectM
			});
		break;
		case "Itm": if(typeof last=== 'undefined' || last === null){
			console.log("OK itm");
			//list(0);
			rIco = gm.rect((document.getElementById("rectMenu").getAttribute("width")*0.75+5), 5, document.getElementById("rectMenu").getAttribute("width")*0.25, document.getElementById("rectMenu").getAttribute("height")).attr({//Game Menu on game screen 
				fill: "#FFFFFF", 													
				"fill-opacity": 0.5,												
				id:"rectIco"														
			})		
			getItens(1,gm);
			gmn.attr({
			//	fill: document.getElementById("btItens").getAttribute("fill")
			});
			last="itm"}
			
		break;
		case "Eqp":
			console.log("OK Eqp");
			//addItem();
			gmn.attr({	
			})
		break;
		case "Cfg":
			console.log("OK Cfg");
			//del();
			shBag();
			gmn.attr({
			})
		break;
		}
	}
	 function testTransform(){
		 
		// var t = gm.path (d="M 54.285156 272.36133 L 54.285156 440.93359 L 282.85742 440.93359 L 282.85742 272.36133 L 54.285156 272.36133 z M 92.933594 311.91992 L 244.45703 311.91992 L 244.45703 412.93555 L 92.933594 412.93555 L 92.933594 311.91992 z ");
		 
		/*var t = gm.path ("M 77.781744,180.09546 C 77.781744,192.09013 68.058139,201.81374 56.063465,201.81374 44.068791,201.81374 34.345186,192.09013 34.345186,180.09546 34.345186,168.10078 44.068791,158.37718 56.063465,158.37718 68.058139,158.37718 77.781744,168.10078 77.781744,180.09546 z");
		t.click(function(f){
			console.log("ok");
			t.animate({d:"M 95.589231,109.95142 C 82.341197,137.53893 71.920552,152.40428 64.356084,152.96107 56.968211,153.50486 52.304716,140.40037 50.39242,112.16971 44.946493,81.713201 54.208141,50.735679 79.542405,52.304513 97.884838,53.440374 112.44954,76.165396 95.589231,109.95142 z"},1500, mina.linear, function(){
			t.animate({d:"M 110.86424,15.061788 C 110.86424,18.339401 108.20721,20.996433 104.92959,20.996433 101.65198,20.996433 98.99495,18.339401 98.99495,15.061788 98.99495,11.784173 101.65198,9.1271427 104.92959,9.1271427 108.20721,9.1271427 110.86424,11.784173 110.86424,15.061788 z"},2000, mina.linear);});
			
		})
		var t1 = gm.text(50, 50, "Snap").attr({
		"font-family":"Comic Sans MS"});
		
		/*var ga = Snap();
            ga.attr({
                viewBox: [0, 0, 67, 67]
            });
		
		
		
		Snap.load("optimised2.svg", function(f){
			s= f.select("g");
			gc= f.select("#gcima");
			gb= f.select("#gbaixo");
			ge= f.select("#gesquerda");
			gd= f.select("#gdireita");
			moveG(s,0,0)
			gm.append(s);
		});
		
		
		*/
		
	 }
	 
	
	/*function list(page){
		page=page*20;
		//console.log(page);

		var ar = "nome 1	1,nome 2	2,nome 3	3,nome 4	1,nome 5	5,nome 6	1,nome 7	1,nome 8	1,nome 9	1,nome 10	1,nome 11	121,nome 12	1,nome 13	1,nome 14	1,nome 15	1,nome 16	1,nome 17	1,nome 18	1,nome 19	1,nome 20	1,nome 21	1,nome 22	1,nome 23	1,nome 24	1,nome 25	1,nome 26	1,nome 27	1,nome 28	1,nome 29	1,nome 30	1,nome 31	1,nome 32	1,nome 33	1,nome 34	1,nome 35	1,nome 36	1,nome 37	1,nome 38	1,nome 39	1,nome 40	1,";
		var ar2 = "Potion	1,Potion 2	2,Potion 3	3,ALL",
			ar = ar2.split(/[,]|[\t]/g);
		
		 //var ar = getBag();
		 
		for (i = 0; i < ar.length/2; i++) { 
			//console.log(i);
			if (i>=20){
				break;
			}

			var t = gm.text(50, i*20+15, ar[(i+page)*2]).attr({
				textAnchor: "left",
				class: "txt",
				id:"item "+(i+page)
			}).click(function(e){
				tmp=(e.path[0].id).match(/(?=[0-9])\w+/g)[0];
				cor.attr({fill:getCollor(parseInt(tmp)*2)});
				corT.attr({fill:getCollor(parseInt(tmp)*2+1)});	
			});
			if (ar[((i+page)*2)+1]==''|ar[((i+page)*2)+1]=='undefined'|ar[((i+page)*2)+1]==null){
				continue;
			}
			var t1 = gm.text(150, i*20+15, ar[((i+page)*2)+1]).attr({
				textAnchor: "left",
				class: "txt",
				id:"qtd "+(i+page)
			})
			
			g0=gm.g(t,t1).attr({
				id:"gpItns "+(i+page)
			}).mouseover(function(){
				
			});
			//console.log(g0);
		}

		showItem();	
	}*/
	
	/*function getCollor(i){
		arC ="#ffdd55	#ffdd00,#bada55	#bada00,#ffcc00	#ffcc99,#ffffff	#000000",
		arC2 = arC.split(/[,]|[\t]/g);
	
		return arC2[i];
	}*/
	
	function del(){ // delete all itens on screen
		var el =document.querySelectorAll('[id^="icon-"]');
		console.log(el[0].parentNode.removeChild(el[0]));

	}
	
	function showItem(id, params, pValues){
		var el =document.querySelectorAll('[id^= "icon-"]');			
		if (el.length==0){
			Snap.load("it-icon-"+id.substring(0,2)+".svg", function (f) {
				g = f.select("g");
				g.attr({id:"icon-"+id})

				for (var i in params){
					f.select("#"+params[i]).attr({fill:"#"+pValues[i]});
				}
				moveG(g,(document.getElementById("rectMenu").getAttribute("width")*0.85-20),(document.getElementById("rectMenu").getAttribute("height")*0.45))
				gm.append(g);
			});
			
		}
		else{
			for (var i in params){
			//console.log(document.getElementById(params[i]).getAttribute("fill"));
				document.getElementById(params[i]).setAttribute("fill","#"+pValues[i]);	
			}
		}				
	}
	
	
	function moveG(g, tx, ty){
		var s = (g.attr("transform")['string']),
			t = s.replace(/(t)/g,"").split(/[,]/g),
			dx,dy;
			if (t==""){
				dx=tx;
				dy=ty;
			}else{
			dx= parseInt(t[0])+tx,
			dy= parseInt(t[1])+ty;
			}
			console.log(dx+","+dy);
			console.log(t=="");
			
		g.attr({
				"transform":"matrix(1,0,0,1,"+dx+","+dy+")"
			})
	}
	
	
	function getPosition(e) {
		var posx = 0;
		var posy = 0;

		if (!e) 
			var e = window.event;

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
	
	
	var y=0;
	function myFunction(e) {
	var f=0;
	
		if (e.wheelDelta < 0|-e.detail<0){
			f=Math.round((e.wheelDelta/10||-e.detail*12));
			y+=1*f;
		}else {
			f=Math.round((-e.wheelDelta/10||e.detail*12));
			y-=1*f;
		};
		/*	gIt.attr({
			"transform":"matrix(1,0,0,1,0,"+-10+")"
		})*/
		
		var delta = Math.max(-1, Math.min(0, (e.wheelDelta || -e.detail)));
		
		if(y<=0){
			document.getElementById("gIt").setAttribute("transform","matrix(1,0,0,1,0,"+y+")");
			document.getElementById("mask").setAttribute("y",-(y));
				
		}else{y=0;
			document.getElementById("gIt").setAttribute("transform","matrix(1,0,0,1,0,0)");
			document.getElementById("mask").setAttribute("y",0);
		};
		console.log(e.wheelDelta/10||-e.detail*10, y, f , y*f);
	};	

	function testAnimation(){
		sp = gm.rect(0, 0, 37, 75).attr({//Game Menu on game screen
			fill: "#FFF",
			opacity: 0,
			id:"sp"
		});
		
		
		Snap.load("drawing01.svg", function(f){
			s= f.select("g");
			console.log(f);
			
		gm.append(s);
		s.attr({
			mask:sp
		});
		sp.attr({//Game Menu on game screen
			opacity: 1
		})
		});
		document.addEventListener('keydown', onetest, false);
		
	}
	
	
	
	
	
	
	
	
	
	