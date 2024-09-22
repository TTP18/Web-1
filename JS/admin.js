let Login = document.getElementById("login1");
function toggleLogin() {
  Login.classList.toggle("open1");
}
//--------------------------------------------------------//
let sideBar = document.getElementById("sidebar");
function toggleSidebar() {
  sideBar.classList.toggle("open");
}
//--------------------------------------------------------//
let products = {
  data: [
    {
      productName: "Combo khuyến mãi MayoB",
      category: "Chicken",
      price: "129.000",
      image: "image/Ga1.png",
    },
    {
      productName: "Combo MayoB 2",
      category: "Chicken",
      price: "155.000",
      image: "image/Ga2.png",
    },
    {
      productName: "Combo MayoB 3",
      category: "Chicken",
      price: "253.000",
      image: "image/Ga3.png",
    },
    {
      productName: "Combo MayoB 4",
      category: "Chicken",
      price: "263.000",
      image: "image/Ga4.png",
    },
    {
      productName: "Hamburger cá",
      category: "Hamburger",
      price: "57.000",
      image: "image/Burger1.png",
    },
    {
      productName: "Hamburger tôm",
      category: "Hamburger",
      price: "60.000",
      image: "image/Burger2.png",
    },
    {
      productName: "Hamburger gà",
      category: "Hamburger",
      price: "55.000",
      image: "image/Burger3.png",
    },
    {
      productName: "Combo hamburger",
      category: "Hamburger",
      price: "55.000",
      image: "image/Burger5.png",
    },
    {
      productName: "Mì ý S2",
      category: "Spaghetti&Rice",
      price: "57.000",
      image: "image/Miy1.png",
    },
    {
      productName: "Mì ý S4",
      category: "Spaghetti&Rice",
      price: "145.000",
      image: "image/Miy2.png",
    },
    {
      productName: "Combo cơm gà",
      category: "Spaghetti&Rice",
      price: "157.000",
      image: "image/Com1.png",
    },
    {
      productName: "Khoai tây nghiền",
      category: "Snack",
      price: "60.000",
      image: "image/Snack.png",
    },
    {
      productName: "Bánh Tart phô mai",
      category: "Snack",
      price: "55.000",
      image: "image/Snack1.png",
    },
    {
      productName: "Snack mực",
      category: "Snack",
      price: "55.000",
      image: "image/Snack2.png",
    },
    {
      productName: "Bắp cải trộn",
      category: "Snack",
      price: "55.000",
      image: "image/Snack3.png",
    },
    {
      productName: "Sprite",
      category: "Drink",
      price: "24.000",
      image: "image/Sprite.png",
    },
    {
      productName: "Coca Cola",
      category: "Drink",
      price: "24.000",
      image: "image/Coca.png",
    },
    {
      productName: "Fanta",
      category: "Drink",
      price: "24.000",
      image: "image/Fanta.png",
    },
    {
      productName: "Dasani",
      category: "Drink",
      price: "20.000",
      image: "image/Dasani.png",
    },
  ],
};
/*----------------------------------------Quản lý đơn hàng----------------------------------------*/
var manageOrdersLink = document.querySelector('.sidebar a:nth-child(1)');
var isOrdersTableVisible = true;

manageOrdersLink.addEventListener('click', function () {
  var ordersTable = document.querySelector('#manageOrdersContent');
  isOrdersTableVisible = !isOrdersTableVisible; // Đảo ngược trạng thái

  if (isOrdersTableVisible) {

    ordersTable.style.display = 'block';
    loadAndDisplayOrdersData();
  } else {
    ordersTable.style.display = 'none';
  }
});

// var manageProduct = document.querySelector('.sidebar a:nth-child(3)');
// var isOrdersTableVisible = false;

// manageProduct.addEventListener('click', function() {
//     var list = document.querySelector('.managerProduct');
//     isOrdersTableVisible = !isOrdersTableVisible; // Đảo ngược trạng thái

//     if (isOrdersTableVisible) {
//         list.style.display = 'block';
//         loadAndDisplayOrdersData();
//     } else {
//         list.style.display = 'none';
//     }
// });

function showOrderDetails(orderID, orderDate, orderStatus, orderTotal) {
  // Hiển thị thông tin chi tiết đơn hàng trong modal
  var orderDetailsModal = document.getElementById('orderDetailsModal');
  var orderDetailsContent = document.getElementById('orderDetails');
  orderDetailsContent.innerHTML = `Mã đơn hàng: ${orderID}<br>Ngày: ${orderDate}<br>Trạng thái: ${orderStatus}<br>Tổng tiền: ${orderTotal}`;
  orderDetailsModal.style.display = 'block';
}

function closeOrderDetailsModal() {
  // Đóng modal khi người dùng nhấp vào nút đóng hoặc bấm ra khỏi khu vực modal
  var orderDetailsModal = document.getElementById('orderDetailsModal');
  orderDetailsModal.style.display = 'none';
}

function loadAndDisplayOrdersData() {
  if (isOrdersTableVisible) {
    var ordersData = [
      { id: 147, date: '2023-11-01', status: 'Chưa xử lý', total: 110000, customerName: 'Nguyễn Văn N', products: ['Combo khuyến mãi MayoB', 'Hamburger cá'] },
      { id: 148, date: '2023-11-30', status: 'Đã xử lý', total: 140000, customerName: 'Trần Thị O', products: ['Hamburger tôm', 'Mì ý S2'] },
      { id: 149, date: '2023-11-05', status: 'Chưa xử lý', total: 180000, customerName: 'Lê Minh P', products: ['Combo MayoB 3', 'Khoai tây nghiền'] },
      { id: 150, date: '2023-11-07', status: 'Đã xử lý', total: 90000, customerName: 'Phạm Thị Q', products: ['Bánh Tart phô mai', 'Bắp cải trộn'] },
      { id: 151, date: '2023-11-09', status: 'Chưa xử lý', total: 120000, customerName: 'Trần Văn R', products: ['Hamburger gà', 'Sprite'] },
      { id: 152, date: '2023-11-11', status: 'Đã xử lý', total: 160000, customerName: 'Lê Thị S', products: ['Mì ý S4', 'Coca Cola'] },
      { id: 153, date: '2023-11-13', status: 'Đã xử lý', total: 190000, customerName: 'Nguyễn Minh T', products: ['Combo hamburger', 'Fanta'] },
      { id: 154, date: '2023-11-15', status: 'Chưa xử lý', total: 130000, customerName: 'Phạm Văn U', products: ['Bánh Tart phô mai', 'Mì ý S2'] },
      { id: 155, date: '2023-11-17', status: 'Đã xử lý', total: 150000, customerName: 'Trần Thị V', products: ['Combo MayoB 4', 'Snack mực'] },
      { id: 156, date: '2023-11-19', status: 'Chưa xử lý', total: 110000, customerName: 'Lê Văn X', products: ['Mì ý S4', 'Bánh Tart phô mai'] },
      { id: 157, date: '2023-11-21', status: 'Đã xử lý', total: 170000, customerName: 'Nguyễn Thị Y', products: ['Combo cơm gà', 'Snack mực'] },
      { id: 158, date: '2023-11-23', status: 'Chưa xử lý', total: 200000, customerName: 'Trần Văn Z', products: ['Khoai tây nghiền', 'Combo cơm gà'] },
      { id: 159, date: '2023-12-01', status: 'Chưa xử lý', total: 110000, customerName: 'Nguyễn Văn A', products: ['Mì ý S2', 'Bánh Tart phô mai'] },
      { id: 160, date: '2023-12-03', status: 'Đã xử lý', total: 140000, customerName: 'Trần Thị B', products: ['Combo hamburger', 'Fanta'] },
      { id: 161, date: '2023-12-30', status: 'Chưa xử lý', total: 180000, customerName: 'Lê Minh C', products: ['Hamburger cá', 'Mì ý S4'] },
      { id: 162, date: '2023-12-07', status: 'Đã xử lý', total: 90000, customerName: 'Phạm Thị D', products: ['Khoai tây nghiền', 'Combo MayoB 4'] },
      { id: 163, date: '2023-12-09', status: 'Chưa xử lý', total: 120000, customerName: 'Trần Văn E', products: ['Hamburger tôm', 'Bắp cải trộn'] },
      { id: 164, date: '2023-12-11', status: 'Đã xử lý', total: 160000, customerName: 'Lê Thị F', products: ['Combo cơm gà', 'Snack mực'] },
      { id: 165, date: '2023-12-13', status: 'Đã xử lý', total: 190000, customerName: 'Nguyễn Minh G', products: ['Bánh Tart phô mai', 'Mì ý S2'] },
      { id: 166, date: '2023-12-15', status: 'Chưa xử lý', total: 130000, customerName: 'Phạm Văn H', products: ['Combo hamburger', 'Sprite'] },
      { id: 167, date: '2023-12-17', status: 'Đã xử lý', total: 150000, customerName: 'Trần Thị I', products: ['Hamburger gà', 'Coca Cola'] },
      { id: 168, date: '2023-12-19', status: 'Chưa xử lý', total: 110000, customerName: 'Lê Văn J', products: ['Mì ý S4', 'Bánh Tart phô mai'] },
      { id: 169, date: '2023-10-01', status: 'Chưa xử lý', total: 120000, customerName: 'Nguyễn Văn K', products: ['Combo cơm gà', 'Sprite'] },
      { id: 170, date: '2023-10-03', status: 'Đã xử lý', total: 130000, customerName: 'Trần Thị L', products: ['Hamburger cá', 'Mì ý S4'] },
      { id: 171, date: '2023-10-05', status: 'Chưa xử lý', total: 140000, customerName: 'Lê Minh M', products: ['Combo khuyến mãi MayoB', 'Fanta'] },
      { id: 172, date: '2023-10-07', status: 'Đã xử lý', total: 150000, customerName: 'Phạm Thị N', products: ['Bánh Tart phô mai', 'Bắp cải trộn'] },
      { id: 173, date: '2023-10-09', status: 'Chưa xử lý', total: 160000, customerName: 'Trần Văn O', products: ['Combo hamburger', 'Coca Cola'] },
      { id: 174, date: '2023-10-11', status: 'Đã xử lý', total: 170000, customerName: 'Lê Thị P', products: ['Hamburger tôm', 'Khoai tây nghiền'] },
      { id: 175, date: '2023-10-13', status: 'Đã xử lý', total: 180000, customerName: 'Nguyễn Minh Q', products: ['Combo MayoB 3', 'Bánh Tart phô mai'] },
      { id: 176, date: '2023-10-15', status: 'Chưa xử lý', total: 190000, customerName: 'Phạm Văn R', products: ['Mì ý S2', 'Hamburger gà'] },
      { id: 177, date: '2023-10-17', status: 'Đã xử lý', total: 200000, customerName: 'Trần Thị S', products: ['Combo cơm gà', 'Mì ý S2'] },
      { id: 178, date: '2023-10-19', status: 'Chưa xử lý', total: 210000, customerName: 'Lê Văn T', products: ['Khoai tây nghiền', 'Combo hamburger'] },
    ];
  }

  var ordersTableBody = document.getElementById('manageOrdersTableBody');
  ordersTableBody.innerHTML = '';

  for (var i = 0; i < ordersData.length; i++) {
    var order = ordersData[i];
    var row = createOrderRow(order);
    ordersTableBody.appendChild(row);
  }
}

// Hàm tạo hàng đơn hàng
function createOrderRow(order) {
  var row = document.createElement('tr');

  var idCell = document.createElement('td');
  idCell.textContent = '#' + order.id;
  row.appendChild(idCell);

  var dateCell = document.createElement('td');
  dateCell.textContent = order.date;
  row.appendChild(dateCell);

  var statusCell = document.createElement('td');
  var statusDropdown = document.createElement('select');
  statusDropdown.innerHTML = `
    <option value="Đã Xử Lý" ${order.status === 'Đã Xử Lý' ? 'selected' : ''}>Đã Xử Lý</option>
    <option value="Chưa Xử Lý" ${order.status === 'Chưa Xử Lý' ? 'selected' : ''}>Chưa Xử Lý</option>
  `;
  statusDropdown.onchange = function () {
    order.status = statusDropdown.value;
  };
  statusCell.appendChild(statusDropdown);
  row.appendChild(statusCell);

  var totalCell = document.createElement('td');
  // Đổi số tiền thành đơn vị đồng và định dạng nó
  totalCell.textContent = formatCurrency(order.total);
  row.appendChild(totalCell);

  var customerCell = document.createElement('td');
  customerCell.textContent = order.customerName;
  row.appendChild(customerCell);

  var productsCell = document.createElement('td');
  productsCell.textContent = order.products.join(', ');
  row.appendChild(productsCell);

  var detailsCell = document.createElement('td');
  var detailsButton = document.createElement('button');
  detailsButton.textContent = 'Xem chi tiết';
  detailsButton.onclick = function () {
    showOrderDetails(order.id, order.date, order.status, formatCurrency(order.total), order.customerName, order.products);
  };
  detailsCell.appendChild(detailsButton);
  row.appendChild(detailsCell);

  return row;
}

// Hàm hiển thị chi tiết đơn hàng
function showOrderDetails(orderID, orderDate, orderStatus, orderTotal, customerName, products) {
  var orderDetailsModal = document.getElementById('orderDetailsModal');
  var orderDetailsContent = document.getElementById('orderDetails');
  orderDetailsContent.innerHTML = `Mã đơn hàng: ${orderID}<br>Ngày: ${orderDate}<br>Trạng thái: ${orderStatus}<br>Tổng tiền: ${orderTotal}<br>Khách hàng: ${customerName}<br>Sản phẩm: ${products.join(', ')}`;
  orderDetailsModal.style.display = 'block';
}


// Hàm đóng modal chi tiết đơn hàng
function closeOrderDetailsModal() {
  var orderDetailsModal = document.getElementById('orderDetailsModal');
  orderDetailsModal.style.display = 'none';
}

// Hàm định dạng số tiền thành đơn vị đồng
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// Load và hiển thị dữ liệu khi trang web được tải
loadAndDisplayOrdersData();

function filterOrdersByDate() {
  console.log('Filter button clicked');
  var startDate = document.getElementById('startDate').value;
  var endDate = document.getElementById('endDate').value;
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  console.log('Start Date:', startDate);
  console.log('End Date:', endDate);

  // Dữ liệu đơn hàng mô phỏng
  var ordersData = [
    { id: 147, date: '2023-11-01', status: 'Chưa xử lý', total: 110000, customerName: 'Nguyễn Văn N', products: ['Combo khuyến mãi MayoB', 'Hamburger cá'] },
    { id: 148, date: '2023-11-30', status: 'Đã xử lý', total: 140000, customerName: 'Trần Thị O', products: ['Hamburger tôm', 'Mì ý S2'] },
    { id: 149, date: '2023-11-05', status: 'Chưa xử lý', total: 180000, customerName: 'Lê Minh P', products: ['Combo MayoB 3', 'Khoai tây nghiền'] },
    { id: 150, date: '2023-11-07', status: 'Đã xử lý', total: 90000, customerName: 'Phạm Thị Q', products: ['Bánh Tart phô mai', 'Bắp cải trộn'] },
    { id: 151, date: '2023-11-09', status: 'Chưa xử lý', total: 120000, customerName: 'Trần Văn R', products: ['Hamburger gà', 'Sprite'] },
    { id: 152, date: '2023-11-11', status: 'Đã xử lý', total: 160000, customerName: 'Lê Thị S', products: ['Mì ý S4', 'Coca Cola'] },
    { id: 153, date: '2023-11-13', status: 'Đã xử lý', total: 190000, customerName: 'Nguyễn Minh T', products: ['Combo hamburger', 'Fanta'] },
    { id: 154, date: '2023-11-15', status: 'Chưa xử lý', total: 130000, customerName: 'Phạm Văn U', products: ['Bánh Tart phô mai', 'Mì ý S2'] },
    { id: 155, date: '2023-11-17', status: 'Đã xử lý', total: 150000, customerName: 'Trần Thị V', products: ['Combo MayoB 4', 'Snack mực'] },
    { id: 156, date: '2023-11-19', status: 'Chưa xử lý', total: 110000, customerName: 'Lê Văn X', products: ['Mì ý S4', 'Bánh Tart phô mai'] },
    { id: 157, date: '2023-11-21', status: 'Đã xử lý', total: 170000, customerName: 'Nguyễn Thị Y', products: ['Combo cơm gà', 'Snack mực'] },
    { id: 158, date: '2023-11-23', status: 'Chưa xử lý', total: 200000, customerName: 'Trần Văn Z', products: ['Khoai tây nghiền', 'Combo cơm gà'] },
    { id: 159, date: '2023-12-01', status: 'Chưa xử lý', total: 110000, customerName: 'Nguyễn Văn A', products: ['Mì ý S2', 'Bánh Tart phô mai'] },
    { id: 160, date: '2023-12-03', status: 'Đã xử lý', total: 140000, customerName: 'Trần Thị B', products: ['Combo hamburger', 'Fanta'] },
    { id: 161, date: '2023-12-30', status: 'Chưa xử lý', total: 180000, customerName: 'Lê Minh C', products: ['Hamburger cá', 'Mì ý S4'] },
    { id: 162, date: '2023-12-07', status: 'Đã xử lý', total: 90000, customerName: 'Phạm Thị D', products: ['Khoai tây nghiền', 'Combo MayoB 4'] },
    { id: 163, date: '2023-12-09', status: 'Chưa xử lý', total: 120000, customerName: 'Trần Văn E', products: ['Hamburger tôm', 'Bắp cải trộn'] },
    { id: 164, date: '2023-12-11', status: 'Đã xử lý', total: 160000, customerName: 'Lê Thị F', products: ['Combo cơm gà', 'Snack mực'] },
    { id: 165, date: '2023-12-13', status: 'Đã xử lý', total: 190000, customerName: 'Nguyễn Minh G', products: ['Bánh Tart phô mai', 'Mì ý S2'] },
    { id: 166, date: '2023-12-15', status: 'Chưa xử lý', total: 130000, customerName: 'Phạm Văn H', products: ['Combo hamburger', 'Sprite'] },
    { id: 167, date: '2023-12-17', status: 'Đã xử lý', total: 150000, customerName: 'Trần Thị I', products: ['Hamburger gà', 'Coca Cola'] },
    { id: 168, date: '2023-12-19', status: 'Chưa xử lý', total: 110000, customerName: 'Lê Văn J', products: ['Mì ý S4', 'Bánh Tart phô mai'] },
    { id: 169, date: '2023-10-01', status: 'Chưa xử lý', total: 120000, customerName: 'Nguyễn Văn K', products: ['Combo cơm gà', 'Sprite'] },
    { id: 170, date: '2023-10-03', status: 'Đã xử lý', total: 130000, customerName: 'Trần Thị L', products: ['Hamburger cá', 'Mì ý S4'] },
    { id: 171, date: '2023-10-05', status: 'Chưa xử lý', total: 140000, customerName: 'Lê Minh M', products: ['Combo khuyến mãi MayoB', 'Fanta'] },
    { id: 172, date: '2023-10-07', status: 'Đã xử lý', total: 150000, customerName: 'Phạm Thị N', products: ['Bánh Tart phô mai', 'Bắp cải trộn'] },
    { id: 173, date: '2023-10-09', status: 'Chưa xử lý', total: 160000, customerName: 'Trần Văn O', products: ['Combo hamburger', 'Coca Cola'] },
    { id: 174, date: '2023-10-11', status: 'Đã xử lý', total: 170000, customerName: 'Lê Thị P', products: ['Hamburger tôm', 'Khoai tây nghiền'] },
    { id: 175, date: '2023-10-13', status: 'Đã xử lý', total: 180000, customerName: 'Nguyễn Minh Q', products: ['Combo MayoB 3', 'Bánh Tart phô mai'] },
    { id: 176, date: '2023-10-15', status: 'Chưa xử lý', total: 190000, customerName: 'Phạm Văn R', products: ['Mì ý S2', 'Hamburger gà'] },
    { id: 177, date: '2023-10-17', status: 'Đã xử lý', total: 200000, customerName: 'Trần Thị S', products: ['Combo cơm gà', 'Mì ý S2'] },
    { id: 178, date: '2023-10-19', status: 'Chưa xử lý', total: 210000, customerName: 'Lê Văn T', products: ['Khoai tây nghiền', 'Combo hamburger'] },
  ];



  var filteredOrders = ordersData.filter(function (order) {
    // Chuyển đổi định dạng ngày tháng từ dữ liệu đơn hàng
    var orderDate = new Date(order.date);

    // So sánh ngày tháng
    return orderDate >= startDate && orderDate <= endDate;
  });
  console.log('Filtered Orders:', filteredOrders);

  displayFilteredOrders(filteredOrders);
}

function displayFilteredOrders(orders) {
  var ordersTableBody = document.getElementById('manageOrdersTableBody');
  ordersTableBody.innerHTML = '';

  for (var i = 0; i < orders.length; i++) {
    var order = orders[i];
    var row = createOrderRow(order);
    ordersTableBody.appendChild(row);
  }
}

var manageOrdersLink = document.querySelector('.sidebar a:nth-child(1)');
manageOrdersLink.addEventListener('click', function () {
  document.querySelector('#manageOrdersContent').style.display = 'block';
  loadAndDisplayOrdersData();
});

// Thêm sự kiện cho nút "Lọc"
var filterButton = document.querySelector('#manageOrdersContent button');
filterButton.addEventListener('click', function () {
  filterOrdersByDate();
});












