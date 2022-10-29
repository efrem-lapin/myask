const AccountMenu = () => {

  const accountMenuItems = [
    {id: "aci1", title: "Мой аккаунт"},
    {id: "aci2", title: "Вопросы"},
    {id: "aci3", title: "Настройки"},
    {id: "aci4", title: "Выйти"},
  ]

  return (
    <ul>
      {accountMenuItems.map(item => <li className="account_menu__item" key={item.id}>{item.title}</li>)}
    </ul>
  );
}

export default AccountMenu
