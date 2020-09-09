<?php

namespace App\Http\Controllers\Api;

use App\Accounting;
use App\Http\Controllers\Controller;
use App\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AccountingController extends Controller
{
    public function getAccountings(Request $request)
    {
        $accountings = DB::select(
            "SELECT id,invoice,CONCAT(start_date, ' - ', end_date) as period,issue_date as issueDate,due_date as dueDate,amount,status
            FROM accountings"
        );
        return json_encode($accountings);
    }

    public function searchAccounting(Request $request)
    {
        $data = $request->all()['data'];

        $where = "WHERE ";
        $flag = false;
        if ($data['keyword']) {
            $where .= " (invoice LIKE '%{$data['keyword']}%' OR id LIKE '%{$data['keyword']}%') ";
            $flag = true;
        }
        if ($data['status']) {
            $status = implode("','", $data['status']);
            $where = $this->checkWhere($where) ? "$where AND " : $where;
            $where .= "(status IN ('$status')) ";
            $flag = true;
        }
        if (!$flag) {
            $where = "";
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
