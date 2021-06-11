import React from 'react'

export default function subscriptionList() {
    return (
        <div>
            <div class="container-lg">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8">
                        <h2>Subscription <b>Details</b></h2>
                    </div>

                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Card Name</th>
                        <th>Card Number</th>
                        <th>Card Type</th>
                        <th>Card Expire Date</th>
                        <th>Card Name</th>
                        <th>Card Number</th>
                        <th>Card Type</th>
                        <th>Card Expire Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pasha bank</td>
                        <td>6544 8484 5454</td>
                        <td>Master</td>
                        <td>2021-15-12</td>
                        
                        <td>Pasha bank</td>
                        <td>6544 8484 5454</td>
                        <td>Master</td>
                        <td>2021-15-12</td>
                        <td>
                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i
                                    class="material-icons">&#xE254;</i></a>
                            <a class="delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Kapital</td>
                        <td>6544 8484 5454</td>
                        <td>Visa</td>
                        <td>2021-15-12</td>
                        <td>Kapital</td>
                        <td>6544 8484 5454</td>
                        <td>Visa</td>
                        <td>2021-15-12</td>
                        <td>
                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i
                                    class="material-icons">&#xE254;</i></a>
                            <a class="delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Pasha bank</td>
                        <td>6544 8484 5454</td>
                        <td>Visa</td>
                        <td>2021-15-12</td>
                        <td>Pasha bank</td>
                        <td>6544 8484 5454</td>
                        <td>Visa</td>
                        <td>2021-15-12</td>
                        <td>
                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i
                                    class="material-icons">&#xE254;</i></a>
                            <a class="delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
        </div>
    )
}
