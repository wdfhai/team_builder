
$(document).ready(function () {

    const employeesRow = $('#employeesRow');

    console.log(employeesArray);

    // employeesArray.forEach((e) => {
    //     const card = $('<div/>').attr('class','card').attr('id','memberCard')
    //     const card_header = $('<div/>').attr('class', 'card-header')
    //     const name = $('<p/>').attr('id', 'name').textContent(e.name);
    //     const role = $('<p/>').attr('id', 'role').textContent(e.icon, e.role);
    //     const card_body = $('<div/>').attr('class', 'card-body');
    //     const idInfo = $('<div/>').attr('class','info');
    //     const emailInfo = $('<div/>').attr('class','info');
    //     const descInfo = $('<div/>').attr('class','info');
    //     const id = $('<p/>').attr('id', 'id').textContent(e.id);
    //     const email = $('<p/>').attr('id', 'email').textContent(e.email);
    //     const info = $('<p/>').attr('id','info');

    //     if (e.role === "Manager"){
    //         info.textContent('Office Number: ', e.officeNumber);
    //     } else if (e.role === "Engineer"){
    //         info.textContent('GitHub: ', e.github);
    //     } else {
    //         info.textContent('School: ', e.school);
    //     }

    //     idInfo.append(id);
    //     emailInfo.append(email);
    //     descInfo.append(info);
    //     card_header.append(name);
    //     card_header.append(role);
    //     card_body.append(idInfo);
    //     card_body.append(emailInfo);
    //     card_body.append(descInfo);
    //     card.append(card_header);
    //     card.append(card_body);
    //     employeesRow.append(card);
    // })

});