import { Alert, Typography, Box } from "@mui/material";
import { useState, useMemo, useCallback } from "react";
import {
  useGetTeamsQuery,
  useDeleteTeamMutation,
} from "../../slices/teamsApiSlice";
import TeamList from "../lists/TeamList";
import useDebounce from "../../hooks/useDebounce";
import SearchInput from "../utils/SearchInput";
import AddButton from "../utils/AddButton";
import AddTeamModal from "../modals/AddTeamModal";
import Pagination from "../utils/Pagination";
import ListSkeleton from "../utils/ListSkeleton";

const EditTeam = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, error, isLoading, isFetching } = useGetTeamsQuery({
    page,
    limit,
  });
  const teams = data?.teams;
  const totalPages = data?.totalPages || 1;
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [deleteTeam, { isError, error: deleteError }] = useDeleteTeamMutation();

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleSearchChange = useCallback(
    (event) => setSearchTerm(event.target.value),
    []
  );

  const handleRemoveTeam = useCallback(
    async (teamId) => {
      try {
        await deleteTeam(teamId);
      } catch (error) {
        console.log(error);
      }
    },
    [deleteTeam]
  );

  const handlePageChange = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  const filteredTeams = useMemo(() => {
    if (!teams) return [];
    return teams
      .filter((team) =>
        team.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
      .sort((a, b) => b.points - a.points);
  }, [teams, debouncedSearchTerm]);

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Teams
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="16px">
        <Box display="flex" flex="1">
          <AddButton onClick={handleOpen} label="Add" />
        </Box>
        <Box display="flex" flex="2" justifyContent="center">
          <SearchInput
            label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Teams..."
          />
        </Box>
        <Box flex="1" />
      </Box>
      {isError || (error && (
        <Alert severity="error">
          {deleteError?.data?.message || error.message}
        </Alert>
      ))}
      {isLoading || isFetching ? (
        <ListSkeleton rows={10} columns={4} />
      ) : (
        <>
          <TeamList
            teams={filteredTeams}
            isDelete={true}
            handleRemove={handleRemoveTeam}
            isAdmin={true}
          />
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
      <AddTeamModal open={open} handleClose={handleClose} />
    </>
  );
};

export default EditTeam;
