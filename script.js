let tableSet = []
let table_idx = 0;
let select_idx = 0;
let input_arr = [];
let chart = [];


class  Row{
    constructor(Gamma, Mach, p_p0,rho_rho0,t_t0,p_pt,rho_rhot,T_Tt,A_At){
        this.Gamma = Gamma;
        this.Mach = Mach;
        this.p_p0 = p_p0;
        this.rho_rho0 = rho_rho0;
        this.t_t0 = t_t0;
        this.p_pt = p_pt;
        this.rho_rhot = rho_rhot;
        this.T_Tt = T_Tt;
        this.A_At = A_At;

    };
}

class Table{
    constructor(){
        this.row = [];
        this.addRow("Gamma","Mach","P/P0","Rho/Rho0","T/T0","P/P*","Rho/Rho*","T/T*","A/A*");
    }

    addRow(Gamma, Mach, p_p0,rho_rho0,t_t0,p_pt,rho_rhot,T_Tt,A_At){
        let row = new Row(Gamma, Mach, p_p0,rho_rho0,t_t0,p_pt,rho_rhot,T_Tt,A_At);
        this.row.push(row);

    }

    createTable() {

        
        let table = document.createElement("TABLE");  //makes a table element for the page
        let table_area = document.getElementById("table_area");
        table.setAttribute('id','display');
    
        let header = table.createTHead();
        let headerRow = header.insertRow(0);
        
        headerRow.insertCell(0).innerHTML = this.row[0].Gamma;
        headerRow.insertCell(1).innerHTML = this.row[0].Mach;
        headerRow.insertCell(2).innerHTML = this.row[0].p_p0;
        headerRow.insertCell(3).innerHTML = this.row[0].rho_rho0;
        headerRow.insertCell(4).innerHTML = this.row[0].t_t0;
        headerRow.insertCell(5).innerHTML = this.row[0].p_pt;
        headerRow.insertCell(6).innerHTML = this.row[0].rho_rhot;
        headerRow.insertCell(7).innerHTML = this.row[0].T_Tt;
        headerRow.insertCell(8).innerHTML = this.row[0].A_At;

        let body = table.createTBody();

        for(var i = 0; i < this.row.length-1; i++) {
            let row = body.insertRow(i);   
            row.insertCell(0).innerHTML = this.row[i+1].Gamma;
            row.insertCell(1).innerHTML = this.row[i+1].Mach;
            row.insertCell(2).innerHTML = this.row[i+1].p_p0;
            row.insertCell(3).innerHTML = this.row[i+1].rho_rho0;
            row.insertCell(4).innerHTML = this.row[i+1].t_t0;
            row.insertCell(5).innerHTML = this.row[i+1].p_pt;
            row.insertCell(6).innerHTML = this.row[i+1].rho_rhot;
            row.insertCell(7).innerHTML = this.row[i+1].T_Tt;
            row.insertCell(8).innerHTML = this.row[i+1].A_At;
            
        }
    

        
        if(chart.length != 0)
        {
            chart.destroy();
        }
        table_area.replaceChildren(table);




    }
    
    createGraph(){

        var dps = [[],[],[],[],[],[],[]];   //dataPoints. Always will be 7  sub sets for these graphs 
        chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            zoomEnabled: true,
            
            theme: "light2",
            title :{
                text: `Gamma: ${this.row[1].Gamma}`
            },
            legend: {
            verticalAlign: "top",
            fontSize: 16,
            dockInsidePlotArea: false
            },
            axisX: {
                logarithmic: false,						
                title: "Mach Value",
                
            },
            axisY: {
                logarithmic: true,
                logarithmBase: 10,						
                title: ""
            },
            
            data: []
        });
        

        for(var j = 1;j<this.row.length;j++)
        {
            let dps_idx = 0;
            dps[dps_idx].push({x: parseFloat(this.row[j].Mach), y: parseFloat(this.row[j].p_p0)});
            if(j == 1){
                chart.options.data.push({ name: 'P/P0',type: 'line', showInLegend: true, dataPoints: dps[dps_idx]});
            }
            dps_idx++;
            
            dps[dps_idx].push({x: parseFloat(this.row[j].Mach), y: parseFloat(this.row[j].rho_rho0)});
            if(j == 1){
                chart.options.data.push({name: 'Rho/Rho0', type: 'line', showInLegend: true, dataPoints: dps[dps_idx]});
            }
            dps_idx++;
            
            dps[dps_idx].push({x: parseFloat(this.row[j].Mach), y: parseFloat(this.row[j].t_t0)});
            if(j == 1){
                chart.options.data.push({name: 'T/T0', type: 'line', showInLegend: true, dataPoints: dps[dps_idx]});
            }
            dps_idx++;

            dps[dps_idx].push({x: parseFloat(this.row[j].Mach), y: parseFloat(this.row[j].p_pt)});
            if(j == 1){
                chart.options.data.push({name: 'P/P*', type: 'line', showInLegend: true, dataPoints: dps[dps_idx]});
            }
            dps_idx++;

            dps[dps_idx].push({x: parseFloat(this.row[j].Mach), y: parseFloat(this.row[j].rho_rhot)});
            if(j == 1){
                chart.options.data.push({name: 'Rho/Rho*', type: 'line', showInLegend: true, dataPoints: dps[dps_idx]});
            }
            dps_idx++;

            dps[dps_idx].push({x: parseFloat(this.row[j].Mach), y: parseFloat(this.row[j].T_Tt)});
            if(j == 1){
                chart.options.data.push({name: 'T/T*', type: 'line', showInLegend: true, dataPoints: dps[dps_idx]});
            }
            dps_idx++;

            dps[dps_idx].push({x: parseFloat(this.row[j].Mach), y: parseFloat(this.row[j].A_At)});
            if(j == 1){
                chart.options.data.push({name: 'A/A*', type: 'line', showInLegend: true, dataPoints: dps[dps_idx]});
            }
            dps_idx++;
        }
        table_area.replaceChildren();
        chart.render();
    }


};


calculate.addEventListener("click", function(){

    /*Setting up Data from input fields*/ 
    let Gamma = parseFloat(document.getElementById('gamma_start').value);
    let gamma_end = parseFloat(document.getElementById('gamma_end').value);
    let gamma_step = parseFloat(document.getElementById('gamma_step').value);
    let M = parseFloat(document.getElementById('m_start').value);
    let m_end = parseFloat(document.getElementById('m_end').value);
    let m_step = parseFloat(document.getElementById('m_step').value);

    /*Validating Input*/
    input = [Gamma,gamma_end,gamma_step,M,m_end,m_step];
    if(validateInput(input))
    {
        /*Loop to calculate and populate tableSet*/
        for(let g_idx = Gamma;g_idx<=gamma_end;g_idx+=gamma_step)
        {
            let table = new Table();
            tableSet.push(table);

            for(let m_idx = M;m_idx<=m_end;m_idx+=m_step)
            {
                p_p0 = ((1 +(g_idx - 1)/2 * m_idx**2)**-1)**(g_idx/(g_idx-1));
                rho_rho0 = ((1 +(g_idx - 1)/2 * m_idx**2)**-1)**(1/(g_idx-1));
                t_t0 = (1 +(g_idx - 1)/2 * m_idx**2)**-1;
                p_pt = ((1 +(g_idx - 1)/2 * m_idx**2)**-1)**(g_idx/(g_idx-1)) * (g_idx/2 + .5)**(g_idx/(g_idx -1));
                rho_rhot = ((1 +(g_idx - 1)/2 * m_idx**2)**-1)**(1/(g_idx-1)) * (g_idx /2 + .5)**(1 / (g_idx - 1));
                T_Tt = (1 +(g_idx - 1)/2 * m_idx**2)**-1 * (g_idx / 2 + .5);
                A_At = ((g_idx + 1)/2)**(-1*(g_idx+1)/(2*(g_idx-1)))*((1+((g_idx-1)/2) * m_idx**2)**((g_idx + 1)/(2*(g_idx -1)))/m_idx);
                
                tableSet[table_idx].addRow(g_idx.toFixed(2),m_idx.toFixed(2),p_p0.toFixed(4),rho_rho0.toFixed(4),t_t0.toFixed(4),p_pt.toFixed(4),rho_rhot.toFixed(4),T_Tt.toFixed(4),A_At.toFixed(4));
                
            }
            table_idx++;

        }
        /*Populates selector with updated Gamma values for User selection*/
        populateSelector(M,m_end,m_step);

        
    }

});


clear_form.addEventListener("click", function(){
    document.getElementById('gamma_start').value = '';
    document.getElementById('gamma_end').value = '';
    document.getElementById('gamma_step').value='';
    document.getElementById('m_start').value='';
    document.getElementById('m_end').value='';
    document.getElementById('m_step').value='';
})

show_table.addEventListener("click", function(){
    let choice = document.getElementById('arr').value;
    tableSet[choice-1].createTable();

    /*Show Save and Delete options*/
    document.getElementById("save_table").style.display = "block";
    document.getElementById("clear_data").style.display = "block";
})


show_graph.addEventListener("click", function(){
    let choice = document.getElementById('arr').value;
    tableSet[choice-1].createGraph();

    /*Show Save and Delete options*/
    document.getElementById("save_table").style.display = "block";
    document.getElementById("clear_data").style.display = "block";
    
    
    
});
    


clear_data.addEventListener("click",function(){
    
    /*Clear Form*/
    document.getElementById('gamma_start').value = '';
    document.getElementById('gamma_end').value = '';
    document.getElementById('gamma_step').value='';
    document.getElementById('m_start').value='';
    document.getElementById('m_end').value='';
    document.getElementById('m_step').value='';
    
    /*Clear tableSet array*/
    tableSet = [];

    /*Clear Graph*/
    chart.destroy();
    

    /*Clear currently displayed table element*/
    table = document.getElementById('display');
    if(table != null)
    {
        table.remove();
    }

    /*Clear Selector Options*/
    selector = document.getElementById('arr');
    for(let i = selector.options.length-1;i >= 0;i--)
    {
        selector.remove(i);
    }
    

    /*Set Save and Delete back to hidden*/
    document.getElementById("save_table").style.display = "none";
    document.getElementById("clear_data").style.display = "none";    
    tableSet = []
    table_idx = 0;
    select_idx = 0;
    input_arr = [];


});

save_table.addEventListener("click",function(){
    // Variable to store the final csv data
    let csv_data = [];

    // Get each row data
    let rows = document.getElementsByTagName('tr');
    if(rows.length == 0)
    {
        return;
    }
    for (let i = 0; i < rows.length; i++) {

        // Get each column data
        let cols = rows[i].querySelectorAll('td,th');

        // Stores each csv row data
        let csvrow = [];
        for (let j = 0; j < cols.length; j++) {

            // Get the text data of each cell
            // of a row and push it to csvrow
            csvrow.push(cols[j].textContent);
        }

        // Combine each column value with comma
        csv_data.push(csvrow.join(","));

    }

    // Combine each row data with new line character
    csv_data = csv_data.join('\n');

        // Create CSV file object and feed
    // our csv_data into it
    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });

    // Create to temporary link to initiate
    // download process
    let temp_link = document.createElement('a');

    // Download csv file
    let Gamma = parseFloat(document.getElementById('gamma_start').value);
    let gamma_end = parseFloat(document.getElementById('gamma_end').value);

    let M = parseFloat(document.getElementById('m_start').value);
    let m_end = parseFloat(document.getElementById('m_end').value);

    let name = `Gamma_${Gamma} M_${M} - ${m_end}`;
 
    temp_link.download = `${name}.csv`;
    let url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;
    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);
    
    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
});


function validateInput(input){
    
    if(!input[0] || !input[1] || !input[2] || !input[3] || !input[4] || !input[5])
    {
        alert("Please enter all input before calculating");
        return;
    }else if(input[0] <= 1)
    {
        alert("Gamma value must be greater than 1");
        return;
    }else if(input[1] < input[0] || input[4] < input[3])
    {
        alert("End values must be greater than Start values");
        return;
    }else if(input[0] < 0 || input[1] < 0 || input[2] < 0 || input[3] < 0 || input[4] < 0 || input[5] < 0)
    {
        alert("All values must be positive");
        return;
    }else{
        let isDuplicateSet = false;
        for(let i = 0;i<input_arr.length;i++)
        {
            if(_.isEqual(input,input_arr[i]))
            {
                isDuplicateSet = true;
                /*alert('already calculated');*/
                return;
            }
        }
        if(isDuplicateSet == false)
        {
            input_arr.push(input);
        }

    }





    return true;
}

function populateSelector(M,m_end,m_step){
    let select = document.getElementById("arr");
    let inList = 0;
    
    for (select_idx; select_idx < tableSet.length; select_idx++) {

        let optn = `Gamma: ${tableSet[select_idx].row[1].Gamma} | M: ${M} - ${m_end} | Step: ${m_step}`;
        let el = document.createElement("option");
        el.textContent = optn;
        el.value = select_idx+1;
        select.appendChild(el);
        
    }
    sortSelector(select);
}

function sortSelector(arr) {
    let tmpAry = new Array();
    for (let i=0;i<arr.options.length;i++) {
        tmpAry[i] = new Array();
        tmpAry[i][0] = arr.options[i].text;
        tmpAry[i][1] = arr.options[i].value;
    }
    tmpAry.sort();
    while (arr.options.length > 0) {
        arr.options[0] = null;
    }
    for (let i=0;i<tmpAry.length;i++) {
        let op = new Option(tmpAry[i][0], tmpAry[i][1]);
        arr.options[i] = op;
    }
    return;
}


