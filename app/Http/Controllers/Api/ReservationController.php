<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservationController extends Controller
{
    public function getReservations ()
    {
        $reservations = DB::select(
            "SELECT id, traveler, site, CONCAT(start_date, ' - ', end_date) as reservationDate, booking_date as bookingDate, guests, price, commission as commision, status
            FROM reservations"
        );
        return json_encode($reservations);
    }


    public function searchReservation(Request $request)
    {
        $data = $request->all()['data'];

        $where = "WHERE ";
        $flag = false;
        if ($data['keyword']) {
            $where .= " (traveler LIKE '%{$data['keyword']}%' OR id LIKE '%{$data['keyword']}%') ";
            $flag = true;
        }
        if ($data['startDate'] && $data['endDate']) {
            $data['startDate'] = explode("T", $data['startDate'])[0];
            $data['endDate'] = explode("T", $data['endDate'])[0];
            $where = $this->checkWhere($where) ? "$where AND " : $where;
            $where .= "(start_date >= '{$data['startDate']}' AND end_date <= '{$data['endDate']}') ";
            $flag = true;
        }
        if ($data['status']) {
            $status = implode("','", $data['status']);
            $where = $this->checkWhere($where) ? "$where AND " : $where;
            $where .= "(status IN ('$status')) ";
            $flag = true;
        }
        if ($data['sites']) {
            $sites = implode("','", $data['sites']);
            $where = $this->checkWhere($where) ? "$where AND " : $where;
            $where .= "(site IN ('$sites')) ";
            $flag = true;
        }
        $where = !$flag ? "" : $where;
        $reservations = DB::select(
        "SELECT id, traveler, site, CONCAT(start_date, ' - ', end_date) as reservationDate, booking_date as bookingDate, guests, price, commission as commision, status
            FROM reservations
            $where"
        );
        return json_encode($reservations);

    }

    private function checkWhere($where)
    {
        return !empty($where);
    }
}
