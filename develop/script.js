
$(document).ready(function () {

    const members = require('../index');
    const memberRow = $('#memberRow');

    members.forEach((member) => {
        const card = $('<div/>').attr('class','card').attr('id','memberCard')
        const card_header = $('<div/>').attr('class', 'card-header')
        const name = $('<p/>').attr('id', 'name').textContent(`${member.name}`);
        const role = $('<p/>').attr('id', 'role').textContent(`${member.icon} ``${member.role}`);
        const card_body = $('<div/>').attr('class', 'card-body');
        const idInfo = $('<div/>').attr('class','info');
        const emailInfo = $('<div/>').attr('class','info');
        const descInfo = $('<div/>').attr('class','info');
        const id = $('<p/>').attr('id', 'id').textContent(`${member.id}`);
        const email = $('<p/>').attr('id', 'role').textContent(`${member.email}`);
        const desc = $('<p/>').attr('id', 'desc').textContent(`${member.info}`);
        idInfo.append(id);
        emailInfo.append(email);
        descInfo.append(desc);
        card_header.append(name);
        card_header.append(role);
        card_body.append(idInfo);
        card_body.append(emailInfo);
        card_body.append(descInfo);
        card.append(card_header);
        card.append(card_body);
        memberRow.append(card);
    })

});