<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AccountingController extends Controller
{
    public function searchAccounting(Request $request)
    {
        $data = $request->all()['data'];

        $where = "WHERE ";
        if ($data['keyword']) {
            $where .= " (invoice LIKE '%{$data['keyword']}%' OR id LIKE '%{$data['keyword']}%') ";
        }
        if ($data['status']) {
            $status = implode("','", $data['status']);
            $where = $this->checkWhere($where) ? "$where AND " : $where;
            $where .= "(status IN ('$status')) ";
        }

        $accountings = DB::select(
            "SELECT id, invoice, CONCAT(start_date, ' - ', end_date) as period, issue_date as issueDate, due_date as dueDate, amount, status
            FROM accountings
            $where"
        );
        return json_encode($accountings);

    }

    private function checkWhere($where)
    {
        return !empty($where);
    }
}
